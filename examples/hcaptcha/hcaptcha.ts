require('dotenv').config();
const { Solver } = require('../../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.hcaptcha({
      websiteURL: 'https://riotgames.com/',
      websiteKey: '019f1553-3845-481c-a6f5-5a60ccf6d830',
      proxy: process.env.PROXYSTRING,
      isInvisible: false, // not invisible captcha impl
      enterprisePayload: null, // not enterprise captcha impl
      userAgent: null, // not enterprise captcha impl
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
