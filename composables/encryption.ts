import * as openpgp from "openpgp";

export const useEncryption = () => {
  const loadKeys = async () => {
    try {
      const [publicKeyRes] = await Promise.all([fetch("/keys/public-key.asc")]);
      const [publicKeyArmored] = await Promise.all([publicKeyRes.text()]);
      return { publicKeyArmored };
    } catch (error) {
      console.error("Fehler beim Laden der Schlüssel:", error);
      return { publicKeyArmored: null };
    }
  };

  const encryptPdfAndSend = async (message: string, file: Blob) => {
    const { publicKeyArmored } = await loadKeys();

    if (!publicKeyArmored) {
      console.error("Schlüssel konnten nicht geladen werden.");
      return;
    }

    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

    try {
      const encryptedFile = await openpgp.encrypt({
        message: await openpgp.createMessage({
          binary: new Uint8Array(await file.arrayBuffer()),
        }),
        encryptionKeys: publicKey,
      });

      const encryptedBlob = new Blob([encryptedFile], {
        type: "application/octet-stream",
      });

      const formData = new FormData();
      formData.append("message", message);
      formData.append("file", encryptedBlob, "ec-onboarding.pdf.pgp");

      return await useFetch("/api/mail-with-attach", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Fehler beim Verschlüsseln:", error);
    }
  };

  return {
    encryptPdfAndSend,
  };
};
