import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { EntityBase } from "@core/base";
import { UserEntity } from "../../user";

@Entity('message')
export class MessageEntity extends EntityBase {
  @ManyToOne(() => UserEntity, {
    eager: true
  })
  @JoinColumn()
  author: UserEntity

  @Column({ type: 'varchar', nullable: false })
  content: string

  constructor(author: UserEntity, content: string) {
    super();
    this.author = author
    this.content = content
  }
}