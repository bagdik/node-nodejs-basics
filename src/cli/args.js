export const parseArgs = () => {
  for (let i = 0; i < process.argv.length; i++) {
    if(process.argv[i].includes('--')) {
      console.log(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`);
      i++;
    }    
  }  
};