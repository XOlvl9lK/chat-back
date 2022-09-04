import { Injectable } from "@nestjs/common";
import { UserRepository } from "../infrastructure/user.repository";
import { UserException } from "../infrastructure/user.exception";
import { UserEntity } from "../domain/user.entity";

@Injectable()
export class CreateUserService {
  constructor(
    private userRepository: UserRepository
  ) {}

  async create(username, password) {
    if (await this.userRepository.isAlreadyExists(username)) UserException.AlreadyExists()

    const user = new UserEntity(username, password)
    await this.userRepository.save(user)
  }
}