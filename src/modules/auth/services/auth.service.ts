import { Injectable } from "@nestjs/common";
import { FindUserService, UserException } from "../../user";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private findUserService: FindUserService,
    private jwtService: JwtService
  ) {}

  private async validateUser(username: string, password: string) {
    const user = await this.findUserService.findByUsername(username)

    if (!user) UserException.NotFound()
    if (!user.isPasswordValid(password)) UserException.IncorrectPassword()

    return user
  }

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password)
    const payload = { username: user.username, sub: user.id }

    return this.jwtService.sign(payload)
  }
}

export type JwtPayload = {
  username: string,
  sub: string
}