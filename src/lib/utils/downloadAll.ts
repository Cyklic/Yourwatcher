import JSZip from "jszip";

export const downloadZip = async (fileURLs: string[]) => {
  try {
    const zip = new JSZip();
    const downloadPromises = fileURLs.map((url) =>
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const fileName = url.substring(url.lastIndexOf("/") + 1);
          zip.file(fileName, blob);
        })
    );

    await Promise.all(downloadPromises);
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = window.URL.createObjectURL(zipBlob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `Report-${Math.floor(Date.now() / 1000)}.zip`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    console.log("Zip file downloaded successfully");
  } catch (error) {
    console.error("Error downloading zip file:", error);
  }
};
