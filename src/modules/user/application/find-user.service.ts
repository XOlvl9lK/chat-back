import { Injectable } from "@nestjs/common";
import { UserRepository } from "../infrastructure/user.repository";

@Injectable()
export class FindUserService {
  constructor(
    private userRepository: UserRepository
  ) {}

  async findAll() {
    return await this.userRepository.find()
  }

  async findById(id: string) {
    return await this.userRepository.findById(id)
  }

  async findByUsername(username: string) {
    return await this.userRepository.findByUsernameWithPassword(username)
  }
}