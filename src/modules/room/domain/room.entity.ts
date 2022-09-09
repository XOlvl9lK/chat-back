import { Column, Entity, ManyToMany } from "typeorm";
import { EntityBase } from "@core/base";
import { UserEntity } from "../../user";
import { JoinTable } from "typeorm/browser";

@Entity()
export class RoomEntity extends EntityBase {
  @Column({ type: 'varchar', nullable: false })
  title: string

  @ManyToMany(() => UserEntity)
  @JoinTable()
  participants: UserEntity[]
}