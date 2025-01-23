export interface TaskParameter {
  name: string;
  required: boolean;
  type: string;
}

export interface TaskParameters {
  [key: string]: TaskParameter[];
}

export interface TaskOptions {
  task: Task;
  apiKey: string;
  mustPoll?: boolean;
}

export interface Task {
  type: string;
  websiteURL?: string;
  websiteKey?: string;
  proxy?: string;
  [key: string]: any;
}

export interface ApiResponse {
  errorId: number;
  taskId?: string;
  status?: string;
  solution?: any;
  errorCode?: string;
  errorDescription?: string;
}
