module.exports = {
  apps: [
    { name: 'datadome', script: './datadome.ts' },
    { name: 'antiturnstile', script: './antiturnstile.ts' },
    { name: 'img2txt', script: './img2txt.ts' },
    { name: 'mtcaptcha', script: './mtcaptcha.ts' },

    // hcaptcha
    { name: 'hcaptchaclassification', script: './hcaptcha/hcaptcha_classification.ts' },
    { name: 'hcaptcha', script: './hcaptcha/hcaptcha.ts' },
    { name: 'hcaptchaproxyless', script: './hcaptcha/hcaptcha_proxyless.ts' },

    // funcaptcha
    {
      name: 'funcaptchaclassification',
      script: './funcaptcha/funcaptcha_classification.ts',
    },
    { name: 'funcaptcha', script: './funcaptcha/funcaptcha.ts' },
    { name: 'funcaptchaproxyless', script: './funcaptcha/funcaptcha_proxyless.ts' },

    // recaptchav2
    { name: 'recaptchav2', script: './recaptcha/v2/recaptchav2.ts' },
    { name: 'recaptchav2proxyless', script: './recaptcha/v2/recaptchav2_proxyless.ts' },
    { name: 'recaptchav2enterprise', script: './recaptcha/v2/recaptchav2_enterprise.ts' },
    {
      name: 'recaptchav2enterpriseproxyless',
      script: './recaptcha/v2/recaptchav2_enterprise_proxyless.ts',
    },

    // recaptchav3
    { name: 'recaptchav3', script: './recaptcha/v3/recaptchav3.ts' },
    { name: 'recaptchav3proxyless', script: './recaptcha/v3/recaptchav3_proxyless.ts' },
    { name: 'recaptchav3enterprise', script: './recaptcha/v3/recaptchav3_enterprise.ts' },
    {
      name: 'recaptchav3enterpriseproxyless',
      script: './recaptcha/v3/recaptchav3_enterprise_proxyless.ts',
    },

    // geetestv3
    { name: 'geetestv3', script: './geetest/v3/geetest.ts' },
    { name: 'geetestv3proxyless', script: './geetest/v3/geetest_proxyless.ts' },

    // geetest v4
    { name: 'geetestv4', script: './geetest/v4/geetest.ts' },
    { name: 'geetestv4proxyless', script: './geetest/v4/geetest_proxyless.ts' },
  ],
};
