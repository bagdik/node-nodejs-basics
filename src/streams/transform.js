import { Transform } from 'stream';

class ReverseStream extends Transform {
  constructor(options = {}) {
    super(options);
  }
  _transform(chunk, enc, cb) {
    const chunkAsString = chunk.toString();
    const reversedChunk = chunkAsString.split('').reverse().join('');
    this.push(reversedChunk);
    cb();
  }
}

export const transform = async () => {
  const reverseStream = new ReverseStream();
  process.stdin
    .pipe(reverseStream)
    .pipe(process.stdout);
};