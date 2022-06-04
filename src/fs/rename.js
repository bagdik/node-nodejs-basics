import fs from 'fs';

export const rename = async () => {
  const wrongFalename = 'src/fs/files/wrongFilename.txt';
  const properFilename = 'src/fs/files/properFilename.md';
  if (!fs.existsSync(wrongFalename) || fs.existsSync(properFilename)) 
    throw new Error('FS operation failed');
  fs.rename(wrongFalename, properFilename, err => {
    if (err) throw err;
    console.log('The file has been renamed!');
  });
};