import { Injectable } from "@nestjs/common";
import { MessageRepository } from "../infrastructure/message.repository";
import { FindUserService, UserException } from "../../user";
import { MessageEntity } from "../domain/message.entity";

@Injectable()
export class CreateMessageService {
  constructor(
    private messageRepository: MessageRepository,
    private findUserService: FindUserService
  ) {}

  async create(authorId: string, content: string) {
    const author = await this.findUserService.findById(authorId)
    if (!author) UserException.NotFound()
    const message = new MessageEntity(author, content)
    return await this.messageRepository.save(message)
  }
}