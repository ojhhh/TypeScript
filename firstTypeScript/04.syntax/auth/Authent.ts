// 로그인, 회원가입 관련 작업
// 카카오, 네이버, 구글 로그인

import { Strategy } from "./auth";

// 이메일과 패스워드를 받음
export interface AuthProps {
  email: string;
  password: string;
}

// 로그인 성공 여부에 따른 결과값 반환
interface AuthenticationResponse {
  success: boolean;
  message?: string;
}

interface Authenticator {
  // 검증에 대한 요청 처리
  authenticate(credentials: AuthProps): Promise<AuthenticationResponse>;
}

// 이메일 로그인
export class EmailAuthenticator implements Authenticator {
  async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
    console.log("Email login");
    return { success: true };
  }
}

// kakao 로그인
export class KakaoAuthenticator implements Authenticator {
  async authenticate(credentials: AuthProps): Promise<AuthenticationResponse> {
    console.log("Kakao login");
    return { success: true };
  }
}

export interface LoginService {
  // 어떤 방식으로 로그인 했는지 확인(Email, kakao)
  login(type: string, credentials: AuthProps): Promise<AuthenticationResponse>;
}

// strategy를 다른 파일에서 받아오기 떄문에 type 부분이 string이 아니라 넘어온 값을 직접 써줘야함
export class Login implements LoginService {
  constructor(private readonly strategy: Strategy) {}
  async login(
    type: "email" | "kakao",
    credentials: AuthProps
  ): Promise<AuthenticationResponse> {
    // 어떤 로그인 로직으로 처리할지 type 구분
    const result = await this.strategy[type].authenticate(credentials);
    return result;
  }
}
