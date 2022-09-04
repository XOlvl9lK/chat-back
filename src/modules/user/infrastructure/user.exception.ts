import { ExceptionBase } from "@core/base";

export class UserException {
  static NotFound() {
    ExceptionBase.BadRequest('Пользователь не найден')
  }

  static IncorrectPassword() {
    ExceptionBase.BadRequest('Неверный пароль')
  }

  static AlreadyExists() {
    ExceptionBase.BadRequest('Пользователь с таким именем уже существует')
  }
}