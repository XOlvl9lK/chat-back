import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./infrastructure/user.repository";
import { FindUserService } from "./application/find-user.service";
import { CreateUserService } from "./application/create-user.service";
import { UserController } from "./controllers/user.controller";
import { UserEntity } from "./domain/user.entity";
import { UpdateUserService } from "./application/update-user.service";

@Module({
  controllers: [
    UserController
  ],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ])
  ],
  providers: [
    FindUserService,
    CreateUserService,
    UserRepository,
    UpdateUserService
  ],
  exports: [FindUserService]
})
export class UserModule {}
