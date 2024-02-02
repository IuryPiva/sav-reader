import * as stream from "stream";
import { SavReader } from "./SavReader.ts";

export class SavBufferReader extends SavReader{

    constructor(buffer: Buffer) {
        const readable = stream.Readable.from(buffer)
        super(readable);
    }


}


