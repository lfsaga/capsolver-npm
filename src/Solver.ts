import { config } from 'dotenv';
import axios from 'axios';

import { Handler } from './Handler';
import { SolverError } from './errors';

import {
  MTCaptchaTask,
  ReCaptchaV2Task,
  SolverTask,
  ImageToTextTask,
  ReCaptchaV2TaskProxyless,
  ReCaptchaV2EnterpriseTask as ReCaptchaV2EnterpriseTask,
  ReCaptchaV2EnterpriseTaskProxyless as ReCaptchaV2EnterpriseTaskProxyless,
  ReCaptchaV3Task,
  ReCaptchaV3TaskProxyless,
  DataDomeSliderTask,
  GeeTestTask,
  GeeTestTaskProxyless,
  AntiTurnstileTaskProxyless,
  AwsWafClassification,
  FriendlyCaptchaTaskProxyless,
  AntiAwsWafTask,
  AntiAwsWafTaskProxyless,
  AntiImpervaTaskProxyless,
  ReCaptchaV2Classification,
  ReCaptchaV3EnterpriseTask,
  ReCaptchaV3EnterpriseTaskProxyless,
  VisionEngine,
  AntiCloudflareTask,
} from './types/tasks';

config();

export class Solver {
  private k: string;
  private pd: number;

  constructor({
    apiKey = process.env.APIKEY ?? '',
    pollDelay = 1700,
  }: {
    apiKey?: string;
    pollDelay?: number;
  }) {
    this.k = apiKey;
    this.pd = pollDelay;
  }

  public async balance(): Promise<number> {
    try {
      const d = (
        await axios.post('https://api.capsolver.com/getBalance', {
          clientKey: this.k,
        })
      ).data;

      if (d.errorId !== 0) {
        return Promise.reject(new SolverError('Failed to retrieve balance', d));
      }

      return parseFloat(d.balance || 0);
    } catch (err) {
      return Promise.reject(
        err instanceof SolverError
          ? err
          : new SolverError('Unexpected error retrieving balance', {
              errorCode: 'BALANCE_ERROR',
              errorDescription: err instanceof Error ? err.message : String(err),
            })
      );
    }
  }

  public async task(options: { task: SolverTask; mustPoll?: boolean }): Promise<any> {
    const { task, mustPoll = true } = options;

    if (!task.type) {
      return Promise.reject(
        new TypeError(
          'Type of task is required. Please provide a valid task type. (e.g. RecaptchaV2Task)'
        )
      );
    }

    try {
      return await new Handler({
        task,
        apiKey: this.k,
        mustPoll,
      }).execute(this.pd);
    } catch (error) {
      return Promise.reject(
        error instanceof SolverError
          ? error
          : new SolverError('Unexpected error in task execution', {
              errorCode: 'TASK_EXECUTION_ERROR',
              errorDescription: error instanceof Error ? error.message : String(error),
            })
      );
    }
  }

  public async visionengine(params: Omit<VisionEngine, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'VisionEngine',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async mtcaptcha(params: Omit<MTCaptchaTask, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'MTCaptchaTask',
        ...params,
      },
      mustPoll: true,
    });
  }

  public async image2text(params: Omit<ImageToTextTask, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'ImageToTextTask',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async recaptchav2classification(
    params: Omit<ReCaptchaV2Classification, 'type'>
  ): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV2Classification',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async recaptchav2(params: Omit<ReCaptchaV2Task, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'RecaptchaV2Task',
        ...params,
      },
    });
  }

  public async recaptchav2proxyless(params: Omit<ReCaptchaV2TaskProxyless, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV2TaskProxyless',
        ...params,
      },
    });
  }

  public async recaptchav2enterprise(
    params: Omit<ReCaptchaV2EnterpriseTask, 'type'>
  ): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV2EnterpriseTask',
        ...params,
      },
    });
  }

  public async recaptchav2enterpriseproxyless(
    params: Omit<ReCaptchaV2EnterpriseTaskProxyless, 'type'>
  ): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV2EnterpriseTaskProxyless',
        ...params,
      },
    });
  }

  public async recaptchav3(params: Omit<ReCaptchaV3Task, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV3Task',
        ...params,
      },
    });
  }

  public async recaptchav3proxyless(params: Omit<ReCaptchaV3TaskProxyless, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV3TaskProxyless',
        ...params,
      },
    });
  }

  public async recaptchav3enterprise(
    params: Omit<ReCaptchaV3EnterpriseTask, 'type'>
  ): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV3EnterpriseTask',
        ...params,
      },
    });
  }

  public async recaptchav3enterpriseproxyless(
    params: Omit<ReCaptchaV3EnterpriseTaskProxyless, 'type'>
  ): Promise<any> {
    return this.task({
      task: {
        type: 'ReCaptchaV3EnterpriseTaskProxyless',
        ...params,
      },
    });
  }

  public async datadome(params: Omit<DataDomeSliderTask, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'DataDomeSliderTask',
        ...params,
      },
    });
  }

  public async imperva(params: Omit<AntiImpervaTaskProxyless, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'AntiImpervaTaskProxyless',
        ...params,
      },
    });
  }

  public async geetest(params: Omit<GeeTestTask, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'GeeTestTask',
        ...params,
      },
    });
  }

  public async geetestproxyless(params: Omit<GeeTestTaskProxyless, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'GeeTestTaskProxyless',
        ...params,
      },
    });
  }

  public async cloudflare(params: Omit<AntiCloudflareTask, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'AntiCloudflareTask',
        ...params,
      },
    });
  }

  public async turnstileproxyless(params: Omit<AntiTurnstileTaskProxyless, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'AntiTurnstileTaskProxyless',
        ...params,
      },
    });
  }

  public async awswafclassification(params: Omit<AwsWafClassification, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'AwsWafClassification',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async awswaf(params: Omit<AntiAwsWafTask, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'AntiAwsWafTask',
        ...params,
      },
    });
  }

  public async awswafproxyless(params: Omit<AntiAwsWafTaskProxyless, 'type'>): Promise<any> {
    return this.task({
      task: {
        type: 'AntiAwsWafTaskProxyless',
        ...params,
      },
    });
  }

  public async friendlycaptchaproxyless(
    params: Omit<FriendlyCaptchaTaskProxyless, 'type'>
  ): Promise<any> {
    return this.task({
      task: {
        type: 'FriendlyCaptchaTaskProxyless',
        ...params,
      },
    });
  }
}
