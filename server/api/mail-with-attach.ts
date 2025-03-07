import * as nodemailer from "nodemailer";
import { IncomingMessage } from "http";
import formidable, { Fields, Files } from "formidable";
import { promises as fs } from "fs";
import * as openpgp from "openpgp";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function loadPrivateKey(): Promise<openpgp.PrivateKey> {
  const privateKeyArmored = await fs.readFile("./keys/secret-key.asc", "utf-8");
  const privateKey = await openpgp.readPrivateKey({
    armoredKey: privateKeyArmored,
  });
  const decryptedPrivateKey = await openpgp.decryptKey({
    privateKey: privateKey,
    passphrase: "lo(@l001",
  });

  return decryptedPrivateKey;
}

const loadPublicKey = async () => {
  const publicKeyArmored = await fs.readFile(
    "./public/keys/public-key.asc",
    "utf-8"
  );

  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
  return publicKey;
};

async function signAndEncryptMessage(
  encryptedMessage: string
): Promise<string> {
  const privateKey = await loadPrivateKey();
  const publicKey = await loadPublicKey();

  const signedMessage = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: encryptedMessage }),
    encryptionKeys: publicKey,
    signingKeys: privateKey,
  });

  return signedMessage; // Gibt die signierte Nachricht als ASCII-Text zurück
}

export default defineEventHandler(async (event) => {
  try {
    const form = formidable({});

    const [fields, files] = await new Promise<[Fields, Files]>(
      (resolve, reject) => {
        form.parse(event.node.req as IncomingMessage, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields, files]);
        });
      }
    );

    const message = fields.message as string | string[] | undefined;
    const messageText = Array.isArray(message) ? message[0] : message;

    if (!messageText) {
      throw createError({
        statusCode: 400,
        message: "Nachricht ist erforderlich",
      });
    }

    const signedMessage = await signAndEncryptMessage(messageText);

    const mailOptions: any = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: "Neue Nachricht von der Website",
      text: signedMessage,
    };

    const uploadedFile = files.file?.[0];

    if (uploadedFile) {
      const fileContent = await fs.readFile(uploadedFile.filepath);
      mailOptions.attachments = [
        {
          filename: uploadedFile.originalFilename,
          content: fileContent,
        },
      ];
    }

    await transporter.sendMail(mailOptions);

    return { success: true, message: "E-Mail wurde erfolgreich gesendet" };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: `Fehler beim Senden der E-Mail: ${error.message}`,
    });
  }
});
