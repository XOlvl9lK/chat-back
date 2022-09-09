import { JwtModuleOptions } from "@nestjs/jwt/dist/interfaces/jwt-module-options.interface";

export const JwtConfig: JwtModuleOptions = {
  secret: 'secret',
  signOptions: { expiresIn: '2h' },
}