import { UserParams } from "../interfaces/login.request";
import { AuthenticatonResponse, Authenticator } from "./Authenticator";

// 3개의 로그인 로직을 하나로 묶음
// 전략 패턴 객체 구조 정의
interface IStrategy {
  // key를 문자열로 지정
  [key: string]: Authenticator;
}

// 서비스 로직들을 가질 객체 구조 정의
class Strategy {
  private strategy: IStrategy = {};

  // 서비스 로직을 객체에 추가할 함수
  public set(key: string, authentcate: Authenticator) {
    // key 값을 받고 서비스 로직 추가
    this.strategy[key] = authentcate;
  }
  public async login(
    type: string,
    credentials: UserParams
  ): Promise<AuthenticatonResponse> {
    const result = await this.strategy[type].authentcate(credentials);
    return result;
  }
}

export default Strategy;
