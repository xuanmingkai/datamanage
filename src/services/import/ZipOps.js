import JSZip from "jszip";

const Unzip = (zipfile, callback) => {
  var dateBefore = new Date();
  const reader = new FileReader();

  reader.onload = function () {
    JSZip.loadAsync(reader.result).then((zip) => {
      let Endflag = false;
      let Foundit = false;
      var zipcontent = [];

      zip.forEach((relpath, zipEntry) => {
        Endflag =
          relpath.endsWith("csv") ||
          relpath.endsWith("xml") ||
          relpath.endsWith("json") ||
          relpath.endsWith("txt");
        if (!Foundit && Endflag) {
          Foundit = true;
          let index = relpath.lastIndexOf(".");
          let filetype = relpath.substring(index);
          let filecontent = zipEntry.async("string");
          zipcontent.push({
            filename: relpath,
            contentType: filetype,
            content: filecontent,
          });
        }
        if (!Foundit) {
          return new Error(
            "The end of file with csv,xml,json,txt is not found"
          );
        }
        Foundit = false;
        Endflag = false;
      });
      var dateAfter = new Date();
      var duration = dateAfter - dateBefore;
      return { duration:duration, zipcontent:zipcontent}
    }).then(result => {
      callback(result.duration, result.zipcontent);
    });
  };

  reader.readAsArrayBuffer(zipfile);
};

// eslint-disable-next-line no-unused-vars
const ArchivedZip = (datafile) => {
  var zip = new JSZip();
  zip.file("Filename", datafile);
  zip
    .generateAsync({
      type: "blob",
      compression: "DEFLATE",
      streamFiles: true,
      compressionOptions: {
        level: 6,
      },
    })
    .then((content) => {
      const reader = new FileReader();
      reader.onload = async () => {
        // eslint-disable-next-line no-unused-vars
        const result = reader.result;
      };
      reader.readAsDataURL(content);
    });
};

export default Unzip;
