import DataUriParser from "datauri/parser.js";

//getting uri from file info
import path from "path";
const getDataUri = (file) => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};

export default getDataUri;
