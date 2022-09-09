import { UserEntity } from "../domain/user.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RepositoryBase } from "@core/base";

@Injectable()
export class UserRepository extends RepositoryBase<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    repository: Repository<UserEntity>
  ) {
    super(repository)
  }

  findById(id: string) {
    return this.findOne({
      where: {
        id
      }
    })
  }

  findByUsernameWithPassword(username: string) {
    return this.findOne({
      select: {
        id: true,
        username: true,
        createdAt: true,
        password: true,
        realName: true,
        updatedAt: true
      },
      where: {
        username
      }
    })
  }

  async isAlreadyExists(username: string) {
    return !!(await this.findOne({ where: { username }}))
  }
}