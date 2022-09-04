import { EntityBase } from "@core/base/entity.base";
import { Repository } from "typeorm";
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";

export class RepositoryBase<T extends EntityBase> {
  constructor(
    private repo: Repository<T>
  ) {}

  get repository() {
    return this.repo
  }

  save(user: T) {
    return this.repository.save(user)
  }

  find(options?: FindManyOptions<T>) {
    return this.repo.find(options)
  }

  findOne(options: FindOneOptions<T>) {
    return this.repo.findOne(options)
  }
}