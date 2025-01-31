require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.API_KEY,
});

async function main() {
  await solver
    .turnstileproxyless({
      websiteURL: 'https://peet.ws/turnstile-test/non-interactive.html',
      websiteKey: '0x4AAAAAAABS7vwvV6VFfMcD',
      metadata: { action: 'login', cdata: '0000-1111-2222-3333-example-cdata' },
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
