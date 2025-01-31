import axios from 'axios';
import { SolverOptions, SolverApiResponse } from './types';
import { SolverTask } from './types/tasks';
import { SolverError } from './errors';

export class Handler {
  private t: SolverTask;
  private k: string | undefined;
  private mp: boolean;

  constructor({ task, apiKey, mustPoll = true }: SolverOptions) {
    this.t = task;
    this.k = apiKey;
    this.mp = mustPoll;
  }

  public async execute(pd: number): Promise<any> {
    try {
      if (this.mp) {
        return await this.poll((await this.create()).taskId!, pd);
      } else {
        return (await this.create()).solution;
      }
    } catch (err) {
      throw err;
    }
  }

  private async create(): Promise<SolverApiResponse> {
    try {
      const res = (
        await axios({
          method: 'post',
          url: 'https://api.capsolver.com/createTask',
          data: {
            clientKey: this.k,
            appId: 'AF0F28E5-8245-49FD-A3FD-43D576C0E9B3',
            task: this.t,
          },
        })
      ).data as SolverApiResponse;

      // console.log(JSON.stringify(res));

      if (res.errorId !== 0) {
        throw new SolverError('Failed to create task', res);
      }

      return res;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        throw new SolverError(
          'Failed to create task',
          err.response?.data || { errorCode: err.message }
        );
      }

      throw err;
    }
  }

  private async poll(tid: string, pd: number): Promise<any> {
    let t = 0;

    while (t <= 10) {
      const res = (
        await axios({
          method: 'post',
          url: 'https://api.capsolver.com/getTaskResult',
          data: { clientKey: this.k, taskId: tid },
        })
      ).data as SolverApiResponse;

      // console.log(JSON.stringify(res));

      if (res.errorId !== 0) {
        throw new SolverError('Failed to retrieve task solution', res);
      }

      if (res.status === 'ready') {
        return res.solution || res;
      }
    }

    throw new SolverError('Failed retrieving task solution. Error threshold excedeed.', {
      taskId: tid,
    });
  }
}
