require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.APIKEY,
});

async function main() {
  await solver
    .recaptchav2enterpriseproxyless({
      websiteURL: 'https://2captcha.com/demo/recaptcha-v2-enterprise',
      websiteKey: '6Lf26sUnAAAAAIKLuWNYgRsFUfmI-3Lex3xT5N-s',
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
