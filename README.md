## 프로젝트 구조

- public, components, pages, types 으로 나눠져있습니다.
- public : 이미지 파일이 들어가있습니다.
- components : 개별 컴포넌트들이 구성된 폴더입니다.
- pages : 페이지가 구성된 폴더입니다.
- types : 타입들을 정의판 폴더입니다.

## 실행가이드

- Node.js 설치를 합니다.
- npm install 후 `npm run start` 명령어를 terminal로 날려줍니다.

## 컴포넌트 작성 가이드

- 사용자정의 컴포넌트는 반드시 대문자로 입력해주세요
- 컴포넌트와 파일명을 일치시켜주세요

## api 수신방법

- 프록시를 설정하여 http-proxy-middleware를 사용해 벡엔드 프로젝트와 api를 주고받습니다.
- http://localhost:8080 벡앤드프로젝트 설정 uri입니다.
