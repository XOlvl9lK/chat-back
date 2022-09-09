import { RepositoryBase } from "@core/base";
import { MessageEntity } from "../domain/message.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class MessageRepository extends RepositoryBase<MessageEntity> {
  constructor(
    @InjectRepository(MessageEntity)
    repository: Repository<MessageEntity>
  ) {
    super(repository);
  }

  findAll() {
    return this.find()
  }

  findByMemberId(id: string) {
    return this.find({
      where: {
        author: {
          id
        }
      }
    })
  }
}