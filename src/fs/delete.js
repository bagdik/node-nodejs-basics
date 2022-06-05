import { unlink, existsSync } from 'fs';

export const remove = async () => {
    const fileToRemove = 'src/fs/files/fileToRemove.txt';
    if (!existsSync(fileToRemove)) throw new Error('FS operation failed');
    unlink(fileToRemove, err => {
      if (err) throw err;
      console.log('The file has been deleted!');
    });
};