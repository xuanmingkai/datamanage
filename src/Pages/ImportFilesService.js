import Unzip from "./ZipOps";

export const ImportFilesService = {
  parsezip,
};

function parsezip(files, success, error) {
  files.forEach((f) => {
    if (f.type === "text/csv" || f.type === "text/plain") {
      console.log(f);
    } else if (f.type === "application/x-zip-compressed") {
      Unzip(f, (duration, zipcontent) => {
        success(duration, zipcontent)
      });
    } else {
      console.log("other file:");
      console.log(f);
    }
  });
  return false
}
