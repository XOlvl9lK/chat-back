import { Body, Controller, Get, Post, Put, UseGuards } from "@nestjs/common";
import { FindUserService } from "../services/find-user.service";
import { CreateUserService } from "../services/create-user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "../../auth/infrastructure/jwt-auth.guard";
import { UserId } from "@core/libs/user-id.decorator";
import { UpdateUserService } from "../services/update-user.service";
import { UpdateProfileDto } from "./dto/update-profile.dto";

@Controller('user')
export class UserController {
  constructor(
    private findUserService: FindUserService,
    private createUserService: CreateUserService,
    private updateUserService: UpdateUserService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return this.findUserService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get('current')
  async getCurrent(@UserId() userId: number) {
    return this.findUserService.findById(userId)
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.createUserService.create(dto.username, dto.password)
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(@UserId() userId: number, @Body() dto: UpdateProfileDto) {
    return await this.updateUserService.updateProfile(userId, dto.username, dto.realName, dto.status)
  }
}