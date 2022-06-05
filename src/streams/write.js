import fs from 'fs';

export const write = async () => {
  const file = './src/streams/files/fileToWrite.txt';
  const writeableStream = fs.createWriteStream(file);
  process.stdin.pipe(writeableStream);
};