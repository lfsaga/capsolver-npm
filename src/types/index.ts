export interface SolverApiResponse {
  errorId: number;
  taskId?: string;
  status?: string;
  solution?: any;
  errorCode?: string;
  errorDescription?: string;
}
