import { SolverTask } from './tasks';

export interface SolverApiResponse {
  errorId: number;
  taskId?: string;
  status?: string;
  solution?: any;
  errorCode?: string;
  errorDescription?: string;
}

export interface SolverOptions {
  task: SolverTask;
  apiKey?: string;
  mustPoll?: boolean;
  pollDelay?: number;
}
