require('dotenv').config();
const { Solver } = require('../../../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.recaptchav2proxyless({
      websiteURL: 'https://www.nakedcph.com/en/auth/view',
      websiteKey: '6LeNqBUUAAAAAFbhC-CS22rwzkZjr_g4vMmqD_qo',
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
