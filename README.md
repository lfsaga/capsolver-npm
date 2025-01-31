# capsolver-npm

manage to solve captcha challenges with node

- ❗ API key it's **required**. [**Get here.**](https://dashboard.capsolver.com/passport/register?inviteCode=CHhA_5os)
- 👌🏼 Now in Typescript.

[![](https://img.shields.io/badge/2.0.2-capsolver--npm-darkgreen?logo=npm&logoColor=white)](https://www.npmjs.com/package/capsolver-npm)
[![](https://img.shields.io/badge/documentation-docs.capsolver.com-darkgreen)](https://docs.capsolver.com/guide/getting-started.html)

## Install

`npm i capsolver-npm`

## Usage

❗ You need to debug each website and the captcha use case, in order to adjust the correct implementation parameters.

- Initialize `Solver` in your script:

```javascript
const { Solver, SolveTaskError } = require('capsolver-npm');
const solver = new Solver('CAP-XXXXXX ...'); // one solver by apikey
```

- When custom `proxy` is required, add matching the following

  - `ip:port:user:pass`

## 📁 Examples

**Figure out [here](https://github.com/0qwertyy/capsolver-npm/tree/master/examples).**

## 🔨 Supported methods

- Consider `null` as optional parameter.
- Read _"Solving ..."_ docs for further information.

[**_Solving recaptchav2_**](https://docs.capsolver.com/guide/captcha/ReCaptchaV2.html)

```javascript
await solver.recaptchav2({
  websiteURL,
  websiteKey,
  proxy,
  pageAction: null,
  enterprisePayload: null,
  isInvisible: false,
  apiDomain: null,
  userAgent: null,
  cookie: null,
});
await solver.recaptchav2proxyless({
  websiteURL,
  websiteKey,
  pageAction: null,
  enterprisePayload: null,
  isInvisible: false,
  apiDomain: null,
  userAgent: null,
  cookie: null,
});
await solver.recaptchav2enterprise({
  websiteURL,
  websiteKey,
  proxy,
  pageAction: null,
  enterprisePayload: null,
  isInvisible: false,
  apiDomain: null,
  userAgent: null,
  cookie: null,
});
await solver.recaptchav2enterpriseproxyless({
  websiteURL,
  websiteKey,
  pageAction: null,
  enterprisePayload: null,
  isInvisible: false,
  apiDomain: null,
  userAgent: null,
  cookie: null,
});
```

[**_Solving recaptchav3_**](https://docs.capsolver.com/guide/captcha/ReCaptchaV3.html)

```javascript
await solver.recaptchav3({
  websiteURL,
  websiteKey,
  proxy,
  pageAction,
  enterprisePayload: null,
  apiDomain: null,
  userAgent: null,
  cookies: null,
});
await solver.recaptchav3proxyless({
  websiteURL,
  websiteKey,
  pageAction,
  enterprisePayload: null,
  apiDomain: null,
  userAgent: null,
  cookies: null,
});
await solver.recaptchav3enterprise({
  websiteURL,
  websiteKey,
  proxy,
  pageAction,
  enterprisePayload: null,
  apiDomain: null,
  userAgent: null,
  cookies: null,
});
await solver.recaptchav3enterpriseproxyless({
  websiteURL,
  websiteKey,
  pageAction,
  enterprisePayload: null,
  apiDomain: null,
  userAgent: null,
  cookies: null,
});
```

[**_Solving geetest V3 & V4_**](https://docs.capsolver.com/guide/captcha/Geetest.html)

```javascript
await solver.geetest({
  websiteURL,
  gt: null,
  challenge: null,
  proxy,
  geetestApiServerSubdomain: null,
  captchaId: null,
});
await solver.geetestproxyless({
  websiteURL,
  gt: null,
  challenge: null,
  captchaId: null,
  geetestApiServerSubdomain: null,
});
```

[**_Solving datadome_**](https://docs.capsolver.com/en/guide/captcha/datadome/)

```javascript
await solver.datadome({ websiteURL, userAgent, captchaUrl, proxy });
```

[**_Solving Imperva_**](https://docs.capsolver.com/guide/antibots/datadome.html)

```javascript
await solver.imperva({ websiteURL, reeseScriptURL });
```

[**_Solving turnstile_**](https://docs.capsolver.com/guide/antibots/cloudflare_turnstile.html)

```javascript
await solver.turnstileproxyless({ websiteURL, websiteKey, metadata: null });
```

[**_Solving mtcaptcha_**](https://docs.capsolver.com/guide/captcha/MtCaptcha.html)

```javascript
await.solver.mtcatpcha({ websiteURL, websiteKey, proxy });
```

[**_Solving image2text captcha_**](https://docs.capsolver.com/guide/recognition/ImageToTextTask.html)

```javascript
await solver.image2text({ websiteURL: null, body, module: null, score: null, caseSensitive: null });
```
