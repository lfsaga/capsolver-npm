require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.API_KEY,
});

async function main() {
  await solver
    .task({
      task: {
        type: 'AntiTurnstileTaskProxyless',
        websiteURL: 'https://peet.ws/turnstile-test/non-interactive.html',
        websiteKey: '0x4AAAAAAABS7vwvV6VFfMcD',
        metadata: { action: 'login', cdata: '0000-1111-2222-3333-example-cdata' },
      },
      mustPoll: true, // indicates that the solution must be retrieved
    })
    .then((solution: any) => {
      console.log(solution);
    })
    .catch((e: typeof SolverError) => {
      console.log(
        `taskId \x1b[33m${e.errorTaskId} \x1b[31m${e.errorCode} \x1b[0m(${e.errorDescription})`
      );
    });
}

main();
