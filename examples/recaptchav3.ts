require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.API_KEY,
});

async function main() {
  await solver
    .recaptchav3({
      websiteURL: 'https://www.freemans.com/',
      websiteKey: '6LfA5nobAAAAAMxwekgF_DnCofaDlm-YqHX5v1BI',
      pageAction: 'sign_in',
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
