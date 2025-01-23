require('dotenv').config();
const { Solver } = require('../dist');

const { TaskException } = require('../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.anticloudflare({
      websiteURL: 'https://medium.com',
      proxy: process.env.PROXYSTRING,
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
