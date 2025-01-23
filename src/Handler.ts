import axios from 'axios';
import { TaskParameter, TaskParameters, TaskOptions, Task, ApiResponse } from './types';
import { TaskException } from './exceptions/TaskException';

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

export class Handler {
  private task: Task;
  private apiKey: string;
  private mustPoll: boolean;
  private parameters: TaskParameters;

  constructor({ task, apiKey, mustPoll = true }: TaskOptions) {
    this.task = task;
    this.apiKey = apiKey;
    this.mustPoll = mustPoll;
    this.parameters = require('./parameters');
  }

  private validate(task: Task): boolean {
    const parameters: TaskParameters = Object.keys(this.parameters).reduce((acc, key) => {
      acc[key.toLowerCase()] = this.parameters[key];
      return acc;
    }, {} as TaskParameters);

    const typeParams = parameters[task.type.toLowerCase()];
    if (typeParams) {
      typeParams.forEach((param: TaskParameter) => {
        const value = task[param.name];
        if (param.required && (!value || typeof value !== param.type)) {
          throw new TypeError(`${param.name} must be of type ${param.type} and not empty.`);
        }
      });
    }

    return true;
  }

  public async execute(rqDelay: number): Promise<any> {
    try {
      if (this.mustPoll) {
        const data = await this.create();
        return await this.pollSolution(data.taskId!, rqDelay);
      } else {
        const response = await this.create();
        return response.solution;
      }
    } catch (error) {
      throw error;
    }
  }

  private async create(): Promise<ApiResponse> {
    try {
      this.validate(this.task);
      const response = await axios({
        url: 'https://api.capsolver.com/createTask',
        method: 'POST',
        data: {
          clientKey: this.apiKey,
          appId: 'AF0F28E5-8245-49FD-A3FD-43D576C0E9B3',
          task: this.task,
        },
      });

      const data = response.data as ApiResponse;

      if (data.errorId !== 0) {
        throw new TaskException('Failed to create task', data);
      }
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new TaskException(
          'Failed to create task',
          error.response?.data || { errorCode: error.message }
        );
      }
      throw error;
    }
  }

  private async pollSolution(taskId: string, rqDelay: number): Promise<any> {
    const req = {
      method: 'post',
      url: 'https://api.capsolver.com/getTaskResult',
      data: { clientKey: this.apiKey, taskId },
    };
    let threshold = 0;

    while (threshold <= 10) {
      await sleep(rqDelay);

      try {
        const response = await axios(req);
        const data = response.data as ApiResponse;

        if (data.errorId !== 0) {
          throw new TaskException('Failed to retrieve task result', data);
        }

        if (data.status === 'ready') {
          return data.solution || data;
        }
      } catch (error) {
        threshold++;
      }
    }

    throw new TaskException('Failed to poll task solution', {
      errorCode: 'unknown',
      errorDescription: 'Reference: https://github.com/lfsaga/capsolver-npm',
    });
  }
}
