import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/user";
import { OrmConfig } from "@core/config";
import { AuthModule } from "./modules/auth";
import { RoomModule } from "./modules/room";
import { WebsocketModule } from "./modules/websocket";
import { MessageModule } from "./modules/message";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    UserModule,
    AuthModule,
    RoomModule,
    WebsocketModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
