import { HttpException, HttpStatus } from "@nestjs/common";

export class ExceptionBase extends HttpException {
  constructor(
    message: string,
    status: HttpStatus | number
  ) {
    super(message, status);
  }

  static BadRequest(message: string) {
    throw new ExceptionBase(message, HttpStatus.BAD_REQUEST)
  }
}