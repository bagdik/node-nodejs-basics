import { readFile, existsSync } from 'fs';

export const read = async () => {
  const fileToRead = 'src/fs/files/fileToRead.txt';
  if(!fileToRead) throw new Error('FS operation failed');
  readFile(fileToRead, 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
  });
};