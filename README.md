# daily-note

react daily note porojce.   
프론트와 백엔드를 사용하여 CRUD 게시판 만들기.   
#react #koa #material-ui #MongoDB    

open url [http://3.21.237.225/](http://3.21.237.225/)

## 폴더구조

```
components
- auth, common, post, posts, write

containers
- auth, common, post, posts, write

lib
- api

modules
- redux

pages
- login, register, postlist, postpage, write 페이지 컴포넌트

styles
- GolbalStyle.scss (글로벌 컴포넌트)

theme
- material-ui dark, normal mode
```

## 기능관련 (frontend)

```
1.title, body, tags, publishedDate 2. Posts 스키마와 모델 구현
3. 생성, 조회, 삭제, 수정 기능 구현
4. ObjectId 검증
5. 페이지네이션 기능
6. 회원 인증 시스템
 - 토큰 기반 인증 시스템
 - 회원가입, 로그인, 로그인 확인, 로그아웃
 - 토큰 발급, 토큰 검증
 - 로그인 시에만 생성, 수정, 삭제
 - 태그로 필터링 가능
7. 라이브러리
 - material-ui
 - PropTypes
 - qs: URL의 query string을 stringify이나 파싱.
 - styled-components
 - react-router-dom, redux, react-redux, react-redux-saga
 - quill: 에디터 라이브러리
 - sanitize-html: html을 텍스트로 변환하여 필터링
 - immer: Auth(회원 인증 시스템) 데이터 변경 시 불변성 유지
 - react-helmet-async: 페이지 meta 헤드 제목 설정
```

## 기능관련 (backend)

```
1.title, body, tags, publishedDate 2. Posts 스키마와 모델 구현
3. 생성, 조회, 삭제, 수정 기능 구현
4. ObjectId 검증
5. 페이지네이션 기능
6. 회원 인증 시스템
 - 토큰 기반 인증 시스템
 - 회원가입, 로그인, 로그인 확인, 로그아웃
 - 토큰 발급, 토큰 검증
 - 로그인 시에만 생성, 수정, 삭제
 - 태그로 필터링 가능
7. 라이브러리
 - dotenv
 - esm
 - joi
 - bcrypt
 - jsonwebtoken
 - nodemon
```

## Extra files

### .prettierrc

```javascript
{
 "singleQuote": true,
 "semi": true,
 "useTabs": false,
 "tabWidth": 2,
 "trailingComma": "all",
 "printWidth": 80
}
```
