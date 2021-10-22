import { Usuario } from "src/app/models/Usuario";
import { PayloadToken } from "./payloadToken";

export interface SessionToken {
    usuario: Usuario,
    payload: PayloadToken
}
