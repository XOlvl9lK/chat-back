import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./infrastructure/user.repository";
import { FindUserService } from "./services/find-user.service";
import { CreateUserService } from "./services/create-user.service";
import { UserController } from "./controllers/user.controller";
import { UserEntity } from "./domain/user.entity";
import { UpdateUserService } from "./services/update-user.service";

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
