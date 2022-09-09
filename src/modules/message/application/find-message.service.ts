import { Injectable } from "@nestjs/common";
import { MessageRepository } from "../infrastructure/message.repository";

@Injectable()
export class FindMessageService {
  constructor(
    private messageRepository: MessageRepository
  ) {}

  async findAll() {
    return await this.messageRepository.findAll()
  }

  async findByMemberId(id: string) {
    return await this.messageRepository.findByMemberId(id)
  }
}