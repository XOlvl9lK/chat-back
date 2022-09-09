import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import { UserEntity } from "../../modules/user";
import { MessageEntity } from "../../modules/message";

export const OrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'chat',
  entities: [
    UserEntity,
    MessageEntity
  ],
  synchronize: true
}