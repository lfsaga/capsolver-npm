import { config } from 'dotenv';
import axios from 'axios';
import { Handler } from './Handler';
import { TaskException } from './exceptions/TaskException';
import {
  HCaptchaTask,
  MTCaptchaTask,
  RecaptchaV2Task,
  CaptchaTask,
  ImageToTextTask,
  HCaptchaClassification,
  HCaptchaTaskProxyLess,
  RecaptchaV2TaskProxyLess,
  RecaptchaV2EnterpriseTask,
  RecaptchaV2EnterpriseTaskProxyLess,
  RecaptchaV3Task,
  RecaptchaV3TaskProxyLess,
  DataDomeSliderTask,
  FunCaptchaTask,
  FunCaptchaTaskProxyLess,
  FunCaptchaClassification,
  GeeTestTask,
  GeeTestTaskProxyLess,
  AntiCloudflareTask,
  AntiTurnstileTask,
  AntiTurnstileTaskProxyLess,
  MTCaptchaTaskProxyLess,
} from './types/tasks';

config();

interface SolverOptions {
  apiKey?: string;
  rqDelay?: number;
}

export class Solver {
  private apiKey: string;
  private rqDelay: number;

  constructor({ apiKey = process.env.APIKEY ?? '', rqDelay = 1700 }: SolverOptions = {}) {
    this.apiKey = apiKey;
    this.rqDelay = rqDelay;
  }

  public async balance(): Promise<number> {
    try {
      const response = await axios.post('https://api.capsolver.com/getBalance', {
        clientKey: this.apiKey,
      });
      const data = response.data;

      if (data.errorId !== 0) {
        throw new TaskException('Failed to retrieve balance', data);
      }

      return data.balance ? parseFloat(data.balance) : data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async runCustomTaskType(options: { task: CaptchaTask; mustPoll?: boolean }): Promise<any> {
    const { task, mustPoll = true } = options;

    if (!task.type) {
      throw new TypeError(
        'Type of task is required. Usage: await handler.runAnyTask({ "type": "AntiTurnstileTaskProxyLess", ... })'
      );
    }

    const handler = new Handler({
      task,
      apiKey: this.apiKey,
      mustPoll,
    });

    return handler.execute(this.rqDelay);
  }

  // # method wrapping
  public async mtcaptcha(params: Omit<MTCaptchaTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'MTCaptchaTask',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async mtcaptchaproxyless(params: Omit<MTCaptchaTaskProxyLess, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'MTCaptchaTaskProxyLess',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async image2text(params: Omit<ImageToTextTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'ImageToTextTask',
        ...params,
      },
      mustPoll: false,
    });
  }

  public async hcaptcha(params: Omit<HCaptchaTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'HCaptchaTask',
        ...params,
      },
    });
  }

  public async hcaptchaproxyless(params: Omit<HCaptchaTaskProxyLess, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'HCaptchaTaskProxyLess',
        ...params,
      },
    });
  }

  public async hcaptchaclassification(params: Omit<HCaptchaClassification, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'HCaptchaClassification',
        ...params,
      },
    });
  }

  public async recaptchav2(params: Omit<RecaptchaV2Task, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'RecaptchaV2Task',
        ...params,
      },
    });
  }

  public async recaptchav2proxyless(params: Omit<RecaptchaV2TaskProxyLess, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'RecaptchaV2TaskProxyLess',
        ...params,
      },
    });
  }

  public async recaptchav2enterprise(
    params: Omit<RecaptchaV2EnterpriseTask, 'type'>
  ): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'RecaptchaV2EnterpriseTask',
        ...params,
      },
    });
  }

  public async recaptchav2enterpriseproxyless(
    params: Omit<RecaptchaV2EnterpriseTaskProxyLess, 'type'>
  ): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'RecaptchaV2EnterpriseTaskProxyLess',
        ...params,
      },
    });
  }

  public async recaptchav3(params: Omit<RecaptchaV3Task, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'RecaptchaV3Task',
        ...params,
      },
    });
  }

  public async recaptchav3proxyless(params: Omit<RecaptchaV3TaskProxyLess, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'RecaptchaV3TaskProxyLess',
        ...params,
      },
    });
  }

  public async datadome(params: Omit<DataDomeSliderTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'DataDomeSliderTask',
        ...params,
      },
    });
  }

  public async funcaptcha(params: Omit<FunCaptchaTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'FunCaptchaTask',
        ...params,
      },
    });
  }

  public async funcaptchaproxyless(params: Omit<FunCaptchaTaskProxyLess, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'FunCaptchaTaskProxyLess',
        ...params,
      },
    });
  }

  public async funcaptchaclassification(
    params: Omit<FunCaptchaClassification, 'type'>
  ): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'FunCaptchaClassification',
        ...params,
      },
    });
  }

  public async geetest(params: Omit<GeeTestTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'GeeTestTask',
        ...params,
      },
    });
  }

  public async geetestproxyless(params: Omit<GeeTestTaskProxyLess, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'GeeTestTaskProxyLess',
        ...params,
      },
    });
  }

  public async anticloudflare(params: Omit<AntiCloudflareTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'AntiCloudflareTask',
        ...params,
      },
    });
  }

  public async antiturnstile(params: Omit<AntiTurnstileTask, 'type'>): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'AntiTurnstileTask',
        ...params,
      },
    });
  }

  public async antiturnstileproxyless(
    params: Omit<AntiTurnstileTaskProxyLess, 'type'>
  ): Promise<any> {
    return this.runCustomTaskType({
      task: {
        type: 'AntiTurnstileTaskProxyLess',
        ...params,
      },
    });
  }
}
