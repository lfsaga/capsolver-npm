# capsolver-npm-examples

### how to test

### steps

1. clone `git clone https://github.com/lfsaga/capsolver-npm`
2. do `npm build`
3. do `npm install` on `./examples`
4. create `./examples/.env` from example file

### usage

- executes `all.sh` to test sequentially
- single test commands
  - `npm run test:balance`
  - `npm run test:custom-task`
  - `npm run test:turnstileproxyless`
  - `npm run test:datadome`
  - `npm run test:image2text`
  - `npm run test:mtcaptcha`
  - `npm run test:geetestv3`
  - `npm run test:geetestv3proxyless`
  - `npm run test:geetestv4`
  - `npm run test:geetestv4proxyless`
  - `npm run test:recatpchav2`
  - `npm run test:recatpchav2proxyless`
  - `npm run test:recatpchav3`
  - `npm run test:recatpchav3proxyless`

### stress test with PM2

- start multiple (take care of your balance)
  - `pm2 start ecosystem.config.js`
  - `pm2 start ecosystem.config.js --only=geetestv3,geetestv4`
- to monit: `pm2 monit`
- to stop: `pm2 delete ecosystem.config.js`
