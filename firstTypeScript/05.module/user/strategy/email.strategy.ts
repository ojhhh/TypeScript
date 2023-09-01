import { UserParams } from "../interfaces/login.request";
import { AuthenticatonResponse, Authenticator } from "./Authenticator";

// email 형식으로 로그인 시도했을때
export class EmailAuthenticator implements Authenticator {
  async authentcate(credentials: UserParams): Promise<AuthenticatonResponse> {
    // email 로그인 로직
    console.log("email login success");
    return { success: true };
  }
}
