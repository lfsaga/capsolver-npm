require('dotenv').config();
const { Solver } = require('../../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.funcaptchaproxyless({
      websiteURL: 'https://auth.discoveryplus.com/',
      websitePublicKey: 'FE296399-FDEA-2EA2-8CD5-50F6E3157ECA',
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
