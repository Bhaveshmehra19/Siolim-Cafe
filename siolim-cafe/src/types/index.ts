export type ApiSuccess = { success: true; message: string };
export type ApiFailure = { success: false; message: string; errors?: Record<string, string[]> };
