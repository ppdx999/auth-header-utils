export class AuthHeaderUtilError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "AuthHeaderUtilError";
  }
}
