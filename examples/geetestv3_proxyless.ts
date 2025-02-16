require('dotenv').config();
const axios = require('axios');
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.APIKEY,
});

async function main() {
  const res = await axios.get('https://segmentfault.com/gateway/geetest/token');

  await solver
    .geetestproxyless({
      websiteURL: 'https://segmentfault.com/',
      gt: res.data.gt, // v3 required
      challenge: res.data.challenge, // v3 required
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
