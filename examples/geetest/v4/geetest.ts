require('dotenv').config();
const { Solver } = require('../../../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.geetest({
      websiteURL: 'https://699pic.com/',
      captchaId: '8e94098fc8fd6286eb4afb663ecece01', // v4 required
      proxy: process.env.PROXYSTRING,
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
