// We are taking the help of Error class from NodeJS.
// We are using super(message). Why? Without super(message), the message would not be inherited correctly from the Error class.
// stack contains the error traceback, which helps with debugging.
// If a stack is passed manually, it assigns it to this.stack.
class apiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong.",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.errors = errors;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export {apiError}
