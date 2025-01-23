require('dotenv').config();
const { Solver } = require('../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.mtcaptcha({
      websiteURL: 'https://www.mtcaptcha.com/',
      websiteKey: 'MTPublic-tqNCRE0GS',
      proxy: process.env.PROXYSTRING,
    });

    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
