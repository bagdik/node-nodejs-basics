import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const decompress = async () => {
  const gunzip = zlib.createGunzip();
  const inp = createReadStream('src/zip/files/archive.gz');
  const out = createWriteStream('src/zip/files/fileToCompress.txt');
  inp.pipe(gunzip).pipe(out);
};