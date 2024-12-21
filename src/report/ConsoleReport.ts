
export interface OutputTarget {
  print(report: any): void;
}
export class ConsoleReport implements OutputTarget {
  print(report: any): void {
    console.log(report)
  }

}