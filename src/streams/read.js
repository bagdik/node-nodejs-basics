import fs from 'fs';

export const read = async () => {
  const file = './src/streams/files/fileToRead.txt';
  const readableStream = fs.createReadStream(file, 'utf-8');
  readableStream.pipe(process.stdout);
};