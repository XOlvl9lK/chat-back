import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway, WebSocketServer
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { CreateMessageService } from "../../message/application/create-message.service";
import { SendMessageDto } from "../presentation/dto/send-message.dto";
import { UseGuards } from "@nestjs/common";
import { WsJwtAuthGuard } from "../infrastructure/ws-jwt-auth.guard";
import { WsUserId } from "@core/libs";
import { JwtService } from "@nestjs/jwt";
import { JwtConfig } from "@core/config";
import { JwtPayload } from "../../auth";
import { FindUserService } from "../../user";
import { FindMessageService } from "../../message/application/find-message.service";

@UseGuards(WsJwtAuthGuard)
@WebSocketGateway(3002, {
  cors: {
    origin: true,
    credentials: true
  },
})
export class WebsocketGateway implements OnGatewayConnection {
  @WebSocketServer()
  private server: Server

  constructor(
    private createMessageService: CreateMessageService,
    private findUserService: FindUserService,
    private findMessageService: FindMessageService,
    private jwtService: JwtService
  ) {}


  async handleConnection(client: Socket, ...args: any[]): Promise<any> {
    const payload: JwtPayload = this.jwtService.verify(client.handshake.auth.token, { secret: JwtConfig.secret })
    if (!payload) client.disconnect(true)
    client.join(payload.sub)
    console.log('connected');
    const members = await this.findUserService.findAll()
    client.emit('members', {
      members
    })
  }

  @UseGuards(WsJwtAuthGuard)
  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() data: SendMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const message = await this.createMessageService.create(data.authorId, data.content)
    client.emit('response', message)
  }

  @UseGuards(WsJwtAuthGuard)
  @SubscribeMessage('chat:connect')
  async handleChatConnect(
    @MessageBody() data: SendMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    //@ts-ignore
    const userId = client.user.userId
    const messages = this.findMessageService.findByMemberId(userId)
    this.server.to(userId).emit('message:list', { messages })
  }
}