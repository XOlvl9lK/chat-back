import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const UserId = createParamDecorator(
  (data: unknown, conext: ExecutionContext) => {
    const req = conext.switchToHttp().getRequest()
    return req?.user?.userId || ''
  }
)