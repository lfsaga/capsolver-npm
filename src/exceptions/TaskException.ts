export class TaskException extends Error {
  public code: string | null;
  public description: string | null;

  constructor(message: string, errorResponse: { errorCode?: string; errorDescription?: string }) {
    super(message);
    this.code = errorResponse.errorCode ?? null;
    this.description = errorResponse.errorDescription ?? null;
  }

  get errorCode(): string {
    return this.code ?? '';
  }

  get errorDescription(): string {
    return this.description ?? '';
  }
}
