require('dotenv').config();
const { Solver } = require('../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const solution = await solver.antiturnstileproxyless({
      websiteURL: 'https://peet.ws/turnstile-test/non-interactive.html',
      websiteKey: '0x4AAAAAAABS7vwvV6VFfMcD',
      metadata: { action: 'login', cdata: '0000-1111-2222-3333-example-cdata' },
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
