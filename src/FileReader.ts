import fs from "node:fs/promises";

// export class FileReader {
//   data: string[][] = [];
//   constructor(private filename: string) { };
//   read(): void {
//     const file = fs.readFileSync(this.filename, {
//       encoding: "utf-8"
//     });



//     this.data = file.split("\n").map(line => line.replace(/\r/g, '')).map((row: string): string[] => row.split(","))

//   }

// }

export class FileReader {
  data: string[][] = [];
  constructor(private filename: string) { };
  async read(): Promise<void> {
    return new Promise<void>(async (res, rej) => {
      try {
        const file = await fs.open(this.filename, "r");
        const fileStream = file.createReadStream();
        let chunks = "";
        fileStream.on("data", (chuck) => {
          chunks += chuck.toString("utf-8")
        })
        fileStream.on("end", async () => {
          this.data = chunks.split("\n").map(line => line.replace(/\r/g, '')).map((row: string): string[] => row.split(","))

          await file.close()

          res();

        })
        fileStream.on("error", async (error) => {
          await file.close();
          rej(error);
        });

      } catch (err) {
        rej(err)
      }
    })



  }

}