require('dotenv').config();
const { Solver } = require('../../../dist');
const axios = require('axios');

async function main() {
  const solver = new Solver({
    apiKey: process.env.APIKEY,
  });

  try {
    const res = await axios.get('https://segmentfault.com/gateway/geetest/token');

    const solution = await solver.geetest({
      websiteURL: 'https://segmentfault.com/',
      gt: res.data.gt, // v3 required
      challenge: res.data.challenge, // v3 required
      proxy: process.env.PROXYSTRING,
    });
    console.log(solution);
  } catch (error) {
    console.log(error);
  }
}

main();
