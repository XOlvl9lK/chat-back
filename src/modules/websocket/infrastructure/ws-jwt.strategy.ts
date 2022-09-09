import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { JwtConfig } from "@core/config";
import { JwtPayload } from "../../auth";
import { Socket } from "socket.io";

@Injectable()
export class WsJwtStrategy extends PassportStrategy(Strategy, 'ws-jwt') {
  constructor() {
    super({
      jwtFromRequest: (socket: Socket) => {
        return socket.handshake.auth.token
      },
      ignoreExpiration: false,
      secretOrKey: JwtConfig.secret
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.sub, username: payload.username }
  }
}