import { writeFile, existsSync } from 'fs';

const path = 'src/fs/files/fresh.txt'; 

export const create = async () => {
  if (existsSync(path)) throw new Error('FS operation failed');
  writeFile(path, 'I am fresh and young', err => {
    if (err) throw err;
    console.log('The file has been saved!');    
  }); 
};