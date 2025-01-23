require('dotenv').config();
const { Solver } = require('../dist');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const balance = await solver.balance();
    console.log('USD balance', balance);
  } catch (error) {
    console.log(error);
  }
}

main();
