import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const WsUserId = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    console.log('decorator');
    console.log(data);
    const asd = context.switchToWs()
    console.log(asd);
    const socket = context.switchToWs().getClient()
    console.log(socket.user);
    console.log('decorator end');
    return socket?.user?.userId || ''
  }
)