# capsolver-npm-examples

### how to test

### steps

1. `git clone https://github.com/lfsaga/capsolver-npm && cd capsolver-npm`
2. `npm install && npm run build`
3. `cd examples && npm install`
4. `cp .env.example .env`
5. `nano .env` to set your `APIKEY`.

### usage

- run `./all.sh` to test sequentially (may require a `chmod` operation)
- test a single task (copy & paste from below)
  - `npm run test:balance`
  - `npm run test:task`
  - `npm run test:awswafclassification`
  - `npm run test:awswafproxyless`
  - `npm run test:awswaf`
  - `npm run test:datadome`
  - `npm run test:friendlycaptchaproxyless`
  - `npm run test:geetestv3proxyless`
  - `npm run test:geetestv3`
  - `npm run test:geetestv4proxyless`
  - `npm run test:geetestv4`
  - `npm run test:image2text`
  - `npm run test:imperva`
  - `npm run test:mtcaptcha`
  - `npm run test:recaptchav2classification`
  - `npm run test:recaptchav2enterpriseproxyless`
  - `npm run test:recaptchav2enterprise`
  - `npm run test:recaptchav2proxyless`
  - `npm run test:recaptchav2`
  - `npm run test:recaptchav3enterpriseproxyless`
  - `npm run test:recaptchav3enterprise`
  - `npm run test:recaptchav3proxyless`
  - `npm run test:recaptchav3`
  - `npm run test:turnstileproxyless`
  - `npm run test:visionengine`

### stress test with PM2

- install pm2: `npm install -g pm2`
- start multiple (take care of your balance)
  - `pm2 start ecosystem.config.js`
  - `pm2 start ecosystem.config.js --only=geetestv3,geetestv4`
- to monit: `pm2 monit`
- to stop: `pm2 delete ecosystem.config.js`

### demo

https://raw.githubusercontent.com/user-attachments/assets/78728ce4-f21d-4f9b-99d7-0c13c75a8cd3
