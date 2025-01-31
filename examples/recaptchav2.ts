require('dotenv').config();
const axios = require('axios');
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.API_KEY,
});

async function main() {
  const res = await axios.get('https://segmentfault.com/gateway/geetest/token');

  await solver
    .recaptchav2({
      websiteURL: 'https://www.nakedcph.com/en/auth/view',
      websiteKey: '6LeNqBUUAAAAAFbhC-CS22rwzkZjr_g4vMmqD_qo',
      proxy: process.env.PROXYSTRING,
    })
    .then((s: any) => {
      console.log(s);
    })
    .catch((e: typeof SolverError) => {
      console.log(
        `tid \x1b[33m${e.errorTaskId} \x1b[31m${e.errorCode} \x1b[0m(${e.errorDescription})`
      );
    });
}

main();
