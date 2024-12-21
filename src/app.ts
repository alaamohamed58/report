import { FileReader } from "./FileReader";
import { FileData } from "./FileData";




const fileData = new FileData(new FileReader("emp2.csv"));


(async () => {
  await fileData.load()
  console.log(fileData.output)
})()