import { Module } from '@nestjs/common';
import { WebsocketGateway } from "./application/websocket.gateway";
import { MessageModule } from "../message";
import { WsJwtStrategy } from "./infrastructure/ws-jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfig } from "@core/config";
import { UserModule } from "../user";

@Module({
  providers: [
    WebsocketGateway,
    WsJwtStrategy
  ],
  imports: [
    MessageModule,
    JwtModule.register(JwtConfig),
    UserModule
  ]
})
export class WebsocketModule {}
