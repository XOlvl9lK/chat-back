import { IsNumber, IsString } from "class-validator";

export class SendMessageDto {
  @IsNumber()
  authorId: string

  @IsString()
  content: string

  @IsString()
  receiverId: string
}