require('dotenv').config();
const { Solver } = require('../../../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.recaptchav3proxyless({
      websiteURL: 'https://www.freemans.com/',
      websiteKey: '6LfA5nobAAAAAMxwekgF_DnCofaDlm-YqHX5v1BI',
      pageAction: 'sign_in', // required for v3
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
