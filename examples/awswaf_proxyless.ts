require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.APIKEY,
});

async function main() {
  await solver
    .awswafproxyless({
      websiteURL: 'https://bark.com/',
      // awsKey: 'AQIDAHjcYu/GjX+QlghicBg......shMIKvZswZemrVVqA==',
      // awsIv: 'CgAAFDIlckAAAAid',
      // awsContext: '7DhQfG5CmoY90ZdxdHCi8WtJ3z......njNKULdcUUVEtxTk=',
      // awsChallengeJS:
      // 'https://41bcdd4fb3cb.610cd090.us-east-1.token.awswaf.com/41bcdd4fb3cb/0d21de737ccb/cd77baa6c832/challenge.js',
      proxy: process.env.PROXYSTRING,
    })
    .then((s: any) => {
      console.log(s);
    })
    .catch((e: typeof SolverError) => {
      console.log(
        `taskId \x1b[33m${e.errorTaskId} \x1b[31m${e.errorCode} \x1b[0m(${e.errorDescription})`
      );
    });
}

main();
