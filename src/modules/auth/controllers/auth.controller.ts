import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../application/auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return await this.authService.login(dto.username, dto.password)
  }

  @Post('logout')
  async logout() {
    return
  }
}