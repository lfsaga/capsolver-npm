require('dotenv').config();
const { Solver } = require('../../../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.recaptchav2enterprise({
      websiteURL: 'https://login.yahoo.net',
      websiteKey: '6Ldbp6saAAAAAAwuhsFeAysZKjR319pRcKUitPUO',
      proxy: process.env.PROXYSTRING,
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
