import { ImportFilesConstants } from "../services/import/ImportFilesConstants";

const importfiles = (state = {}, action) => {
  switch (action.type) {
    case ImportFilesConstants.PARSE_PROCESS:
      return { processing: true };
    case ImportFilesConstants.PARSE_SUCCESS:
      return {
        result: true,
        duration: action.duration,
        content: action.content,
      };
    case ImportFilesConstants.PARSE_FAILURE:
      return { result: false };
    default:
      return state;
  }
}

export default importfiles
