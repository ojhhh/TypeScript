import { UserParams } from "./interfaces/login.request";
import UserService from "./service/user.service";

// 사용자 서비스 로직 클래스 정의
class UserController {
  constructor(private readonly userService: UserService) {}

  // 로그인
  // /login/:type으로 요청이 들어왔다면
  signin() {
    // req.body에서 유저의 정보를 받아옴(실습 환경에서는 임시 객체 사용)
    const loginParams: UserParams = {
      email: "db@google.com",
      password: "1234",
    };
    this.userService.login("google", loginParams);
  }
  // 회원가입
  // /signup
  signup() {}
}

export default UserController;
