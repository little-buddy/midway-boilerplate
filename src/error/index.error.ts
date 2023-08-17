import { HttpStatus, MidwayHttpError } from '@midwayjs/core';

export class AppError extends MidwayHttpError {
  constructor(msg?: string) {
    super(msg || 'App Error', HttpStatus.OK);
  }
}
