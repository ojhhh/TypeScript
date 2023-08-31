import {
  AuthProps,
  EmailAuthenticator,
  KakaoAuthenticator,
  Login,
  LoginService,
} from "./Authent";

// I를 붙히는 이유는 인터페이스라고 알려주는 뜻
interface IEmailSender {
  sendEmail(email: string): void;
}

class EmailSender implements IEmailSender {
  sendEmail(email: string): void {}
}

export interface Strategy {
  email: EmailAuthenticator;
  kakao: KakaoAuthenticator;
}

class Auth {
  // private 키워드가 붙어서 생성자의 객체의 키로 추가
  constructor(
    private readonly authProps: AuthProps,
    private readonly emailSender: EmailSender,
    private readonly loginServer: LoginService
  ) {}

  // 로그인 구조
  public async login() {
    console.log(this);
    await this.loginServer.login("kakao", this.authProps);
  }

  // emaill 인증 처리 구조
  public register(): void {
    this.emailSender.sendEmail(this.authProps.email);
  }
}

// email, password 임시 객체
const authProps: AuthProps = { email: "winnel@naver.com", password: "1234" };
const _emailSender = new EmailSender();

// email 로그인 로직 클래스 동적 할당
const _email = new EmailAuthenticator();
// kakao 로그인 로직 클래스 동적 할당
const _kakao = new KakaoAuthenticator();

// 로그인 서비스 로직을 가지고 있는 객체
const _strategy: Strategy = {
  email: _email,
  kakao: _kakao,
};

const _loginService = new Login(_strategy);
const auth = new Auth(authProps, _emailSender, _loginService);
auth.login();
