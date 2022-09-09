import { Module } from '@nestjs/common';
import { UserModule } from "../user";
import { JwtModule } from "@nestjs/jwt";
import { JwtConfig } from "@core/config";
import { AuthService } from "./application/auth.service";
import { AuthController } from "./controllers/auth.controller";
import { JwtStrategy } from "./infrastructure/jwt.strategy";

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    JwtModule.register(JwtConfig)
  ],
  providers: [
    AuthService,
    JwtStrategy
  ]
})
export class AuthModule {}
