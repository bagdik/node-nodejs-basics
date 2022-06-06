import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
  const child = fork('./src/cp/files/script.js', args);
  child.on('close', (code) =>
    console.log(`Child process 3 exited. Code: ${code}`)
  );
};