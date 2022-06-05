import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export const compress = async () => {
  const gzip = zlib.createGzip();
  const inp = createReadStream('src/zip/files/fileToCompress.txt');
  const out = createWriteStream('src/zip/files/archive.gz');
  inp.pipe(gzip).pipe(out);
};