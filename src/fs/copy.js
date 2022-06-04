import fs from 'fs';
import path from 'path'; 

export const copy = async () => {
  const src = 'src/fs/files';
  const dest = 'src/fs/files_copy';
  if (!fs.existsSync(src) || fs.existsSync(dest)) 
    throw new Error('FS operation failed');
  fs.mkdir(dest, err => {
    if (err) throw err; 
  })
  fs.readdir(src, (err, files) => {
    files.forEach(file => {
      fs.copyFile(path.join(src, file), path.join(dest, file), err => {
        if (err) throw err; 
        console.log(`The file '${file}' has been copied!`);
      });
    });
  });
};