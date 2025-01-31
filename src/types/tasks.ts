export interface BaseSolverTask {
  type: string;
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
}

export interface ImageToTextTask extends BaseSolverTask {
  type: 'ImageToTextTask';
  body?: string;
  module?: string;
  score?: number;
  case?: boolean;
}

export interface AntiAwsWafTask extends BaseSolverTask {
  type: 'AntiAwsWafTask';
  websiteURL?: string;
  awsKey?: string;
  awsIv?: string;
  awsContext?: string;
  awsChallengeJS?: string;
}

export interface AntiAwsWafTaskProxyless extends BaseSolverTask {
  type: 'AntiAwsWafTaskProxyless';
  websiteURL?: string;
  awsKey?: string;
  awsIv?: string;
  awsContext?: string;
  awsChallengeJS?: string;
}

export interface AwsWafClassification extends BaseSolverTask {
  type: 'AwsWafClassification';
  websiteURL?: string;
  images?: string[];
  question?: string;
}

export interface VisionEngine extends BaseSolverTask {
  type: 'VisionEngine';
  module?: string;
  websiteURL?: string;
  image?: string;
  imageBackground?: string;
  question?: string;
}

export interface MTCaptchaTask extends BaseSolverTask {
  type: 'MTCaptchaTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
}

export interface MTCaptchaTaskProxyless extends BaseSolverTask {
  type: 'MTCaptchaTaskProxyless';
  websiteURL?: string;
  websiteKey?: string;
}

export interface ReCaptchaV2Classification extends BaseSolverTask {
  type: 'ReCaptchaV2Classification';
  websiteURL?: string;
  question?: string;
  image?: string;
}

export interface ReCaptchaV2Task extends BaseSolverTask {
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

export interface ReCaptchaV2TaskProxyless extends BaseSolverTask {
  type: 'ReCaptchaV2TaskProxyless';
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  isInvisible?: boolean;
  cookies?: string;
}

export interface ReCaptchaV2EnterpriseTask extends BaseSolverTask {
  type: 'ReCaptchaV2EnterpriseTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  enterprisePayload?: Record<string, any>;
  apiDomain?: string;
  cookies?: string;
}

export interface ReCaptchaV2EnterpriseTaskProxyless extends BaseSolverTask {
  type: 'ReCaptchaV2EnterpriseTaskProxyless';
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  enterprisePayload?: Record<string, any>;
  apiDomain?: string;
  cookies?: string;
}

export interface ReCaptchaV3Task extends BaseSolverTask {
  type: 'ReCaptchaV3Task';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  pageAction?: string;
  enterprisePayload?: any;
  apiDomain?: string;
  cookies?: number;
}

export interface ReCaptchaV3TaskProxyless extends BaseSolverTask {
  type: 'ReCaptchaV3TaskProxyless';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  pageAction?: string;
  enterprisePayload?: any;
  apiDomain?: string;
  cookies?: number;
}

export interface ReCaptchaV3EnterpriseTask extends BaseSolverTask {
  type: 'ReCaptchaV3EnterpriseTask';
  proxy?: string;
  websiteURL?: string;
  websiteKey?: string;
  userAgent?: string;
  enterprisePayload?: Record<string, any>;
  apiDomain?: string;
  cookies?: string;
}

export interface ReCaptchaV3EnterpriseTaskProxyless extends BaseSolverTask {
  type: 'ReCaptchaV3EnterpriseTaskProxyless';
  websiteURL?: string;
  websiteKey?: string;
  pageAction?: string;
  enterprisePayload?: any;
  apiDomain?: string;
  cookies?: number;
}

export interface GeeTestTask extends BaseSolverTask {
  type: 'GeeTestTask';
  proxy?: string;
  websiteURL?: string;
  gt?: string;
  challenge?: string;
  captchaId?: string;
  geetestApiServerSubdomain?: string;
}

export interface GeeTestTaskProxyless extends BaseSolverTask {
  type: 'GeeTestTaskProxyless';
  websiteURL?: string;
  gt?: string;
  challenge?: string;
  captchaId?: string;
  geetestApiServerSubdomain?: string;
}

export interface DataDomeSliderTask extends BaseSolverTask {
  type: 'DataDomeSliderTask';
  proxy?: string;
  websiteURL?: string;
  captchaUrl?: string;
  userAgent?: string;
}

export interface AntiTurnstileTaskProxyless extends BaseSolverTask {
  type: 'AntiTurnstileTaskProxyless';
  websiteURL?: string;
  websiteKey?: string;
  metadata?: Record<string, any>;
}

export interface AntiCloudflareTask extends BaseSolverTask {
  type: 'AntiCloudflareTask';
  websiteURL?: string;
  proxy?: string;
}

export interface AntiImpervaTaskProxyless extends BaseSolverTask {
  type: 'AntiImpervaTaskProxyless';
  websiteURL?: string;
  reeseScriptURL?: string;
}

export interface FriendlyCaptchaTaskProxyless extends BaseSolverTask {
  type: 'FriendlyCaptchaTaskProxyless';
  websiteURL?: string;
  websiteKey?: string;
}

export type SolverTask =
  | ImageToTextTask
  | AntiAwsWafTask
  | AntiAwsWafTaskProxyless
  | AwsWafClassification
  | VisionEngine
  | MTCaptchaTask
  | MTCaptchaTaskProxyless
  | ReCaptchaV2Task
  | ReCaptchaV2TaskProxyless
  | ReCaptchaV2EnterpriseTask
  | ReCaptchaV2EnterpriseTaskProxyless
  | ReCaptchaV3Task
  | ReCaptchaV3TaskProxyless
  | ReCaptchaV3EnterpriseTask
  | ReCaptchaV3EnterpriseTaskProxyless
  | ReCaptchaV2Classification
  | GeeTestTask
  | GeeTestTaskProxyless
  | DataDomeSliderTask
  | AntiCloudflareTask
  | AntiTurnstileTaskProxyless
  | AntiImpervaTaskProxyless
  | FriendlyCaptchaTaskProxyless;
