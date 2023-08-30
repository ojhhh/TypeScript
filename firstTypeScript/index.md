# typeScript란?

- javaScript에서 타입 검사가 확장 추가된 언어 (javaScript의 상위 집합 슈퍼셋)
- 대형 프로젝트를 진행할떄 오류검사가 쉬움
- 객체 지향 프로그래밍에 특화된 프로그래밍 패턴을 지원하지만 함수형 프로그래밍이 대세라 타입검사나 추론 등의 기능을 사용할 예정
- javaScript로 작업할 떄보다 초기에 세팅하는 건 어렵지만 개발하며 생기는 에러를 사전에 방지할 수 있고 javaScript코드의 품질과 개발 생산성을 높일 수 있음

### 런타임이 존재하지 않음

- 컴파일러가 존재하며 typeScript를 javaScript로 변환해줌

## 가이드

- javaScript는 타입이 정해져 있지 않아 자동완성이 미리 뜨지않고 어떤 값이 있는지 확인하면서 타이핑 해야함
- typeScript는 별칭을 통해서 자동완성 및 작성이 편하고 미리 에러를 방지 할 수 있어 정확하게 작업을 할 수 있음
- typeScript로 작성한 코드를 브라우저가 해석할 수 있는 javaScript코드로 변환해서 사용(컴파일)

## typsScript 설치

<!-- package.json 초기값 설정 -->

- npm init -y

<!-- 개발 단계에서 사용 -D -> --sava-dev와 통일 -->

- npm install -D typeScript

<!-- 버전 확인 -->

- npx tsc --version

#### typeScript의 컴파일 과정 옵션을 설정할 수 있는 파일

- tsconfig.json

<!-- tsconfig.json 생성 명령어 -->
<!-- 설정된 하위 경로에 규칙이 맞지않는 다면 수정하는 경고가뜸 -->

- npx tsc --init

<!-- ts-node 설치 -->
<!-- node.js는 javaScript 런타임 환경이기 때문에 내장 함수 및 모듈에 대한 타입이 없음 -->
<!-- 그렇기 때문에 nodejs 타입 정보를 패키지로 설치해서 사용해야함 -->

- npm install ts-node @types/node

#### 실행 가이드

<!-- javaScript -> node -->
<!-- node app.js -->

<!-- typeScript -> ts-node -->

- npx ts-node app.js
