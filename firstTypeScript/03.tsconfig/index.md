# tsconfig.json

- compilerOptions : typeScript 파일을 컴파일 진행시 어떤 형태로 컴파일을 진행할지 속성을 정의하는 부분
- include : 컴파일을 진행할 폴더를 지정
- exclude : 컴파일에서 제외할 폴더 지정

## compilerOptions

- module : 모듈 시스템 지정
- outDir : 내보낼 경로 지정
- target : 번들링 문법 지정

* esModuleinterop : true (import/export 문법을 자연스럽게 변경)
  - CommonJS 형식과 ES6 형식의 혼용을 자연스럽게 통합해주는 속성

- strict : true
- baseUrl : 모듈의 상대 경로를 지정 ./src
- paths : "baseUrl" 경로를 기준으로 상대 위치를 가져오는 매핑값(경로를 변수처럼 사용)

```sh
npm init -y
npx tsc --init
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "module": "CommonJS",
    "outDir": "./dist",
    "target": "ES6",
    "esModuleInterop": true,
    "strict": true,
    "baseUrl": "./src",
    "paths": {
      "@user/*": ["user/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["**/*.test.ts"]
}
```

```json
// package.json 추가
{
  "script": {
    "build": "tsc"
  }
}
```

### 문제

- @user 이부분의 경로가 컴파일 되고 반환이 않됨
  > tsc-alias를 설치하여 사용
- 빌드시에 별칭을 경로로 변환해주는 패키지

```sh
npm install -D tsc-alias
```

```json
// package.json 수정
{
  "script": {
    "build": "tsc && tsc-alias"
  }
}
```
