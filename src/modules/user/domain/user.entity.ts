import { EntityBase } from "@core/base";
import { Column, Entity } from "typeorm";
import { compareSync, hashSync } from "bcrypt";

@Entity('user')
export class UserEntity extends EntityBase {
  @Column({ type: 'varchar', nullable: false, unique: true })
  username: string

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string

  @Column({ type: 'varchar', nullable: true })
  realName?: string

  @Column({ type: 'varchar', nullable: true })
  status?: string

  constructor(username: string, password: string, realName?: string) {
    super()

    this.username = username
    this.password = this.hashPassword(password)
    this.realName = realName
  }

  private hashPassword(password: string) {
    if (!password) return
    return hashSync(password, 5)
  }

  isPasswordValid(password: string) {
    return compareSync(password, this.password)
  }

  update(username: string, realName?: string, status?: string) {
    this.username = username
    this.realName = realName
    this.status = status
  }
}