require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.APIKEY,
});

async function main() {
  await solver
    .recaptchav3enterprise({
      websiteURL: 'https://2captcha.com/demo/recaptcha-v3-enterprise',
      websiteKey: '6Lel38UnAAAAAMRwKj9qLH2Ws4Tf2uTDQCyfgR6b',
      pageAction: 'demo_action', // required for v3
      proxy: process.env.PROXYSTRING,
    })
    .then((s: any) => {
      console.log(s);
    })
    .catch((e: typeof SolverError) => {
      console.log(
        `taskId \x1b[33m${e.errorTaskId} \x1b[31m${e.errorCode} \x1b[0m(${e.errorDescription})`
      );
    });
}

main();
