import { FileData } from "./FileData";
import { ConsoleReport } from "./report/ConsoleReport";




const fileData = FileData.readAndLoad("emp2.csv");


(async () => {
  await fileData.load()
  new ConsoleReport().print(fileData.output)

})()