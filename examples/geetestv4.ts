require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.API_KEY,
});

async function main() {
  await solver
    .geetest({
      websiteURL: 'https://2captcha.com/demo/geetest-v4',
      captchaId: 'e392e1d7fd421dc63325744d5a2b9c73', // v4 required
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
