import { UserParams } from "../interfaces/login.request";
import { AuthenticatonResponse, Authenticator } from "./Authenticator";

// 카카오 계정으로 로그인 시도 했을때
export class KakaoAuthenticator implements Authenticator {
  async authentcate(credentials: UserParams): Promise<AuthenticatonResponse> {
    // 카카오 로그인 로직
    console.log("kakao login success");
    return { success: true };
  }
}
