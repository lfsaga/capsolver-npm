export interface BaseTask {
  type: string;
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
}

export interface ImageToTextTask extends BaseTask {
  type: 'ImageToTextTask';
  body?: string;
  module?: string;
  score?: number;
  case?: boolean;
}

export interface AntiAwsWafTask extends BaseTask {
  type: 'AntiAwsWafTask';
  websiteURL: string;
  awsKey: string;
  awsIv: string;
  awsContext: string;
  awsChallengeJS: string;
}

export interface BinanceCaptchaTask extends BaseTask {
  type: 'BinanceCaptchaTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  validateId?: string;
}

export interface MTCaptchaTask extends BaseTask {
  type: 'MTCaptchaTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
}

export interface MTCaptchaTaskProxyLess extends BaseTask {
  type: 'MTCaptchaTaskProxyLess';
  websiteURL?: string;
  websiteKey?: string;
}

export interface HCaptchaTask extends BaseTask {
  type: 'HCaptchaTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  isInvisible?: boolean;
  enterprisePayload?: Record<string, any>;
  userAgent?: string;
}

export interface HCaptchaTaskProxyLess extends BaseTask {
  type: 'HCaptchaTaskProxyLess';
  websiteURL?: string;
  websiteKey?: string;
  isInvisible?: boolean;
  enterprisePayload?: Record<string, any>;
  userAgent?: string;
}

export interface HCaptchaEnterpriseTask extends BaseTask {
  type: 'HCaptchaEnterpriseTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  isInvisible?: boolean;
  enterprisePayload?: Record<string, any>;
  userAgent?: string;
}

export interface RecaptchaV2Task extends BaseTask {
  type: 'RecaptchaV2Task';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  isInvisible?: boolean;
  pageAction?: string;
  enterprisePayload?: Record<string, any>;
  apiDomain?: string;
  cookies?: string;
}

export interface FunCaptchaTask extends BaseTask {
  type: 'FunCaptchaTask';
  proxy?: string;
  websiteURL?: string;
  websitePublicKey?: string;
  funcaptchaApiJSSubdomain?: string;
  data?: string;
  userAgent?: string;
}

export interface AwsWafClassification extends BaseTask {
  type: 'AwsWafClassification';
  images?: object;
  question?: string;
  score?: number;
  case?: boolean;
}

export interface HCaptchaClassification extends BaseTask {
  type: 'HCaptchaClassification';
  question?: string;
  queries?: object;
}

export interface RecaptchaV2TaskProxyLess extends BaseTask {
  type: 'RecaptchaV2TaskProxyLess';
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  isInvisible?: boolean;
  cookies?: string;
}

export interface RecaptchaV2EnterpriseTask extends BaseTask {
  type: 'RecaptchaV2EnterpriseTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  enterprisePayload?: Record<string, any>;
  apiDomain?: string;
  cookies?: string;
}

export interface RecaptchaV2EnterpriseTaskProxyLess extends BaseTask {
  type: 'RecaptchaV2EnterpriseTaskProxyLess';
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  enterprisePayload?: Record<string, any>;
  apiDomain?: string;
  cookies?: string;
}

export interface RecaptchaV3Task extends BaseTask {
  type: 'RecaptchaV3Task';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  pageAction?: string;
  minScore?: number;
}

export interface RecaptchaV3TaskProxyLess extends BaseTask {
  type: 'RecaptchaV3TaskProxyLess';
  websiteURL?: string;
  websiteKey?: string;
  pageAction?: string;
  minScore?: number;
}

export interface ReCaptchaV2Classification extends BaseTask {
  type: 'ReCaptchaV2Classification';
  question?: string;
  image?: string;
}

export interface GeeTestTask extends BaseTask {
  type: 'GeeTestTask';
  proxy?: string;
  websiteURL?: string;
  gt?: string;
  challenge?: string;
  geetestApiServerSubdomain?: string;
  userAgent?: string;
  captchaId?: string;
}

export interface GeeTestTaskProxyLess extends BaseTask {
  type: 'GeeTestTaskProxyLess';
  websiteURL?: string;
  gt?: string;
  challenge?: string;
  geetestApiServerSubdomain?: string;
  userAgent?: string;
  captchaId?: string;
}

export interface DataDomeSliderTask extends BaseTask {
  type: 'DataDomeSliderTask';
  proxy?: string;
  websiteURL?: string;
  captchaUrl?: string;
  userAgent?: string;
}

export interface FunCaptchaClassification extends BaseTask {
  type: 'FunCaptchaClassification';
  image?: string;
  question?: string;
}

export interface FunCaptchaTaskProxyLess extends BaseTask {
  type: 'FunCaptchaTaskProxyLess';
  websiteURL?: string;
  websitePublicKey?: string;
  funcaptchaApiJSSubdomain?: string;
  data?: string;
  userAgent?: string;
}

export interface AntiCloudflareTask extends BaseTask {
  type: 'AntiCloudflareTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  metadata?: Record<string, any>;
}

export interface AntiTurnstileTask extends BaseTask {
  type: 'AntiTurnstileTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  metadata?: Record<string, any>;
}

export interface AntiTurnstileTaskProxyLess extends BaseTask {
  type: 'AntiTurnstileTaskProxyLess';
  websiteURL?: string;
  websiteKey?: string;
  metadata?: Record<string, any>;
}

export type CaptchaTask =
  | ImageToTextTask
  | AntiAwsWafTask
  | BinanceCaptchaTask
  | MTCaptchaTask
  | MTCaptchaTaskProxyLess
  | HCaptchaTask
  | HCaptchaTaskProxyLess
  | HCaptchaEnterpriseTask
  | RecaptchaV2Task
  | FunCaptchaTask
  | AwsWafClassification
  | HCaptchaClassification
  | RecaptchaV2TaskProxyLess
  | RecaptchaV2EnterpriseTask
  | RecaptchaV2EnterpriseTaskProxyLess
  | RecaptchaV3Task
  | RecaptchaV3TaskProxyLess
  | ReCaptchaV2Classification
  | GeeTestTask
  | GeeTestTaskProxyLess
  | DataDomeSliderTask
  | FunCaptchaClassification
  | FunCaptchaTaskProxyLess
  | AntiCloudflareTask
  | AntiTurnstileTask
  | AntiTurnstileTaskProxyLess;
