import Strategy from "../strategy/strategy";
import { UserParams } from "../interfaces/login.request";
import { AuthenticatonResponse } from "../strategy/Authenticator";

// 유저 서비스 로직 클래스 정의
class UserService {
  // 전략패턴 유저 로그인 서비스 로직 객체
  // 이메일, 카카오, 구글 세가지 로그인 로직을 사용
  constructor(private readonly strategy: Strategy) {
    console.log("UserService");
  }

  async login(
    type: string,
    credentials: UserParams
  ): Promise<AuthenticatonResponse> {
    console.log("UserService.login.type : ", type);
    console.log("UserService.login.credentials : ", credentials);
    const result = await this.strategy.login(type, credentials);
    return result;
  }
}

export default UserService;
