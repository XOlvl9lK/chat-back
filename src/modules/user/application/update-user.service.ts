import { Injectable } from "@nestjs/common";
import { UserRepository } from "../infrastructure/user.repository";
import { UserException } from "../infrastructure/user.exception";

@Injectable()
export class UpdateUserService {
  constructor(
    private userRepository: UserRepository
  ) {}

  async updateProfile(id: string, username: string, realName?: string, status?: string) {
    const user = await this.userRepository.findById(id)
    if (!user) UserException.NotFound()
    user.update(username, realName, status)
    return await this.userRepository.save(user)
  }
}