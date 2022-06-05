import crypto from 'crypto';
import { readFileSync } from 'fs';

export const calculateHash = async () => {
  const file = './src/hash/files/fileToCalculateHashFor.txt';
  const data = readFileSync(file, 'utf-8');
  const hash = crypto.createHash('sha256');
  return hash.update(data).digest('hex');
};