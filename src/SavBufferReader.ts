import * as stream from "node:stream";
import { SavReader } from "./SavReader.ts";

export class SavBufferReader extends SavReader {
  constructor(buffer: Iterable<any> | AsyncIterable<any>) {
    const readable = stream.Readable.from(buffer);
    super(readable);
  }
}
