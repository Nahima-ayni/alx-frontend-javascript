// run.js

const path = require('path');
const { execSync } = require('child_process');

const [, , file] = process.argv;

if (!file) {
  console.error('Please specify a file to run.');
  process.exit(1);
}

const scriptPath = path.resolve(__dirname, '0x00-ES6_basic', file);

try {
  execSync(`npm run dev ${scriptPath}`, { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to run script:', error);
  process.exit(1);
}
