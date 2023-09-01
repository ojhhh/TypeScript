import { UserParams } from "../interfaces/login.request";

// 응답 받았을때 객체의 구조 정의
export interface AuthenticatonResponse {
  success: boolean;
  message?: string;
}

// 검증 객체 구조 정의
export interface Authenticator {
  // 로그인 검증 함수 구조 선언
  authentcate(credentials: UserParams): Promise<AuthenticatonResponse>;
}
