export class SolverError extends Error {
  public code: string | null;
  public description: string | null;
  public taskId: string | null;

  constructor(
    message: string,
    errorResponse: {
      errorCode?: string;
      errorDescription?: string;
      taskId?: string;
    }
  ) {
    super(message);
    this.code = errorResponse.errorCode ?? null;
    this.description = errorResponse.errorDescription ?? null;
    this.taskId = errorResponse.taskId ?? null;
  }

  get errorCode(): string {
    return this.code ?? '';
  }

  get errorDescription(): string {
    return this.description ?? '';
  }

  get errorTaskId(): string {
    return this.taskId ?? '';
  }
}
