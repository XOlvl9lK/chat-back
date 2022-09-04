import { IsNumber, IsString } from "class-validator";
import { Optional } from "@nestjs/common";

export class UpdateProfileDto {
  @IsString()
  username: string

  @IsString()
  @Optional()
  realName?: string

  @IsString()
  @Optional()
  status?: string
}