import { readdir, existsSync } from 'fs';

export const list = async () => {
  const dir = 'src/fs/files';
  if(!dir) throw new Error('FS operation failed');
  readdir(dir, (err, files) => {
    if(err) throw err;
    console.log(files);
  });
};