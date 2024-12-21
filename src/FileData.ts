import { FileReader } from "./FileReader";
import { MatchData } from "./MatchData";


interface Data {
  data: string[][],
  read(): Promise<void>
}


export class FileData {
  static readAndLoad(filename: string): FileData {
    return new FileData(new FileReader(filename));

  }
  output: MatchData[] = []
  constructor(public dataReader: Data) { };

  async load(): Promise<void> {
    await this.dataReader.read();

    this.output = this.dataReader.data.map((row: string[]): MatchData => {
      return [
        row[0],
        parseInt(row[1]),
        parseFloat(row[2]),
        row[3],
        row[4],
      ]
    })



  }
}