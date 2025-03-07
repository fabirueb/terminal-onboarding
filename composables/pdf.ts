import { PDFDocument } from "pdf-lib";

export const usePdf = () => {
  const createPdf = async (image1: any, image2: any, text: any) => {
    try {
      const pdfDoc = await PDFDocument.create();

      // Füge eine Seite hinzu
      const page = pdfDoc.addPage([600, 800]);

      // Füge Text hinzu
      page.drawText(text, {
        x: 50,
        y: 750,
        size: 20,
      });

      // Füge Bilder hinzu
      const image1Bytes = await image1.arrayBuffer();
      const image2Bytes = await image2.arrayBuffer();

      let image1Embed;
      let image2Embed;

      try {
        if (image1.type === "image/jpeg") {
          image1Embed = await pdfDoc.embedJpg(image1Bytes);
        } else if (image1.type === "image/png") {
          image1Embed = await pdfDoc.embedPng(image1Bytes);
        } else {
          throw new Error(
            `Unsupported image format for Image 1: ${image1.type}`
          );
        }

        if (image2.type === "image/jpeg") {
          image2Embed = await pdfDoc.embedJpg(image2Bytes);
        } else if (image2.type === "image/png") {
          image2Embed = await pdfDoc.embedPng(image2Bytes);
        } else {
          throw new Error(
            `Unsupported image format for Image 2: ${image2.type}`
          );
        }
      } catch (error: any) {
        console.error(error.message);
        return null; // Return null or handle this as needed
      }

      page.drawImage(image1Embed, {
        x: 50,
        y: 300,
        width: 200,
        height: 200,
      });

      page.drawImage(image2Embed, {
        x: 250,
        y: 300,
        width: 200,
        height: 200,
      });

      // Erstelle das PDF als Blob
      const pdfBytes = await pdfDoc.save();
      const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

      return pdfBlob;
    } catch (error) {}
  };

  return {
    createPdf,
  };
};
