import fs from "fs";
import path from "path";
// import metadata from '../utils/metadata'
interface DataObject {
  [key: string]: any;
}

export default function GetData(): DataObject[] {
  const metadataFolderPath = path.join(__dirname, "../utils/metadata"); // Assuming metadata folder is in the same directory as this script
  const files = fs.readdirSync(metadataFolderPath); // Read all files in the metadata folder
  const jsonData: DataObject[] = [];

  files.forEach((file) => {
    if (file.endsWith(".json")) {
      // Check if the file is a JSON file
      const filePath = path.join(metadataFolderPath, file);
      const fileData = fs.readFileSync(filePath, "utf-8");
      const jsonDataFromFile = JSON.parse(fileData) as DataObject;
      jsonData.push(jsonDataFromFile);
    }
  });

  console.log("json data: ", jsonData);
  return jsonData;
}
