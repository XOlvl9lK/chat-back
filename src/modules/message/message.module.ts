import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageEntity } from "./domain/message.entity";
import { MessageRepository } from "./infrastructure/message.repository";
import { UserModule } from "../user";
import { CreateMessageService } from "./application/create-message.service";
import { FindMessageService } from "./application/find-message.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MessageEntity
    ]),
    UserModule
  ],
  providers: [
    MessageRepository,
    CreateMessageService,
    FindMessageService
  ],
  exports: [
    CreateMessageService,
    FindMessageService
  ]
})
export class MessageModule {}
