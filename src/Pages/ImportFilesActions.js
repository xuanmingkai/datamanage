import { ImportFilesConstants } from "./ImportFilesConstants";
import { ImportFilesService } from "./ImportFilesService";
export const ImportFilesActions = {
  parse,
};

function parse(files) {
  return (dispatch) => {
    dispatch(parse({ files }));
    ImportFilesService.parsezip(
      files,
      (duration, content) => {
        dispatch(success(files, duration, content));
      },
      () => {
        dispatch(failure("Parsed file is Failured"));
      }
    );
  };

  function parse(files) {
    return { type: ImportFilesConstants.PARSE_PROCESS, files };
  }
  function success(files, duration, content) {
    return { type: ImportFilesConstants.PARSE_SUCCESS, files, duration, content };
  }
  function failure(error) {
    return { type: ImportFilesConstants.PARSE_FIALURE, error };
  }
}
