require('dotenv').config();
const { Solver, SolverError } = require('../dist');

const solver = new Solver({
  apiKey: process.env.APIKEY,
});

async function main() {
  await solver
    .datadome({
      websiteURL: 'https://allegro.pl/',
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      captchaUrl:
        'https://geo.captcha-delivery.com/captcha/?initialCid=DAVfsaHuc~1lJNTKFkZF4ix4sFDHffsYNtWio9i_1Sv9MkZ~JXR5RxmuxI76~WhiQFAs39wLpbvE8~uze6FC91XEaCCvadHZPmAUp71wrKSCShmyABxSEvLoEzSAnd66&cid=DAVfsaHuc~1lJNTKFkZF4ix4sFDHffsYNtWio9i_1Sv9MkZ~JXR5RxmuxI76~WhiQFAs39wLpbvE8~uze6FC91XEaCCvadHZPmAUp71wrKSCShmyABxSEvLoEzSAnd66&referer=https%3A%2F%2Fallegro.pl%2F&hash=77DC0FFBAA0B77570F6B414F8E5BDB&t=fe&s=29701&e=9e3ce65fd6c57373d8ff7cb729a4e78a8ed3f43d0174456e125ba4816b40b060&ir=414&dm=dc_ir',
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
