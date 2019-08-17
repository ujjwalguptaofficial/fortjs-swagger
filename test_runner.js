const { execSync } = require('child_process');

const testCommand = `npm run install:build:test`;
execSync(`cd tests/rest/typescript && ${testCommand}`, {
    stdio: 'inherit'
});
