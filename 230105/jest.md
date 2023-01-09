### jest를 사용해보자

- jest는 TDD 개발에 용이하고 테스트 코드를 작성할 수 있다.
- 페이스북에서 만든 테스트 프레임워크이다.

- 개발용으로만 설치할거면 --> --save-dev 붙이면 됨
- npm i -- save-dev jest

- 테스트 파일 만들 때는 그냥 js가 아닌 파일명.test.js 파일로 만들어야한다.
- 설치했으면 package.json 쪽 scripts 영역에 "scripts": {
  "test": "jest 테스트 진행할 파일 경로"
  }, 로 바꿔주고
- npm test
