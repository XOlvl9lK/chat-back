import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/user";
import { OrmConfig } from "@core/config";
import { AuthModule } from "./modules/auth";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
