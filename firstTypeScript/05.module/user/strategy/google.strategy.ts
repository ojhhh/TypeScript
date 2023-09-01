import { UserParams } from "../interfaces/login.request";
import { AuthenticatonResponse, Authenticator } from "./Authenticator";

// 구글 계정으로 로그인 시도 했을떄
export class GoogleAuthenticator implements Authenticator {
  async authentcate(credentials: UserParams): Promise<AuthenticatonResponse> {
    // 구글 로그인 로직 작성
    console.log(credentials);
    console.log("google login success");
    return { success: true };
  }
}
