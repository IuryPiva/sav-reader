import * as fs from "node:fs";
import { SavReader } from "./SavReader.ts";

export class SavFileReader extends SavReader{

    filename: string;

    constructor(filename: string) {

        const readable = fs.createReadStream(filename, {
            encoding: null,
            highWaterMark: 1024 * 1024 // 1024 kb
        });
        super(readable);

        this.filename = filename;
    }

}

