require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.APIKEY,
});

async function main() {
  await solver
    .balance()
    .then((b: number) => {
      console.log('USD balance', b);
    })
    .catch((e: typeof SolverError) => {
      console.log(e);
    });
}

main();
