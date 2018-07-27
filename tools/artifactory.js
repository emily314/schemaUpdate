const fs = require('fs');
const https = require('https');
const path = require('path');
const readline = require('readline');

const npmrc = path.resolve(__dirname, '..', '.npmrc');

const requestOptions = {
  host: 'artifactory.swg.usma.ibm.com',
  port: 443,
  path: '/artifactory/api/npm/auth'
};

const registryProd = 'https://artifactory.swg.usma.ibm.com/artifactory/api/npm/v-ess-npm-prod';
const registryDev = 'https://artifactory.swg.usma.ibm.com/artifactory/api/npm/v-ess-npm-dev';

const additionalProps = [
  'package-lock = false',
  `registry = ${registryProd}`,
  `#registry = ${registryDev}`
];

let email;
let password;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(field = '') {
  return new Promise((resolve, reject__) => {
    rl.question(`${field}: `, line => {
      resolve(line);
    });
  });
}

function requestBaseNpmrc() {
  const options = Object.assign(requestOptions, {
    auth: email + ':' + password
  });

  return new Promise((resolve, reject) => {
    https.get(options, res => {
      res.on('data', data => {
        if (res.statusCode !== 200) {
          reject(new Error('Failed to download config\n' + data.toString('utf8')));
        }

        resolve(data.toString('utf8'));
      });
    }).on('error', e => {
      reject(e);
    });
  });
}

function writeNpmrc(content) {
  fs.writeFileSync(npmrc, content);
}

// ---

prompt('email')
  .then(emailInput => {
    email = emailInput;
    return prompt('password');
  })
  .then(passwordInput => {
    password = passwordInput;
    rl.close();
  })
  .then(() => {
    console.log('\nRequesting base .npmrc from registry');
    return requestBaseNpmrc();
  })
  .then(baseContent => {
    console.log('Writing .npmrc');
    const content = [baseContent].concat(additionalProps).join('\n');
    writeNpmrc(content);
  })
  .then(() => {
    console.log(npmrc + ' updated!');
  })
  .catch(error => {
    console.error('Failed to create config', error);
    process.exit(1);
  });

