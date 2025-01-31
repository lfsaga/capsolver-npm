require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.API_KEY,
});

async function main() {
  await solver
    .recaptchav3({
      websiteURL: 'https://2captcha.com/demo/recaptcha-v3',
      websiteKey: '6LfB5_IbAAAAAMCtsjEHEHKqcB9iQocwwxTiihJu',
      pageAction: 'demo_action',
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
