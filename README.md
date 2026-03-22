# React CRUD Project

## 프로젝트 링크

[https://react-crud-project-five.vercel.app/](https://react-crud-project-five.vercel.app/) 에서 배포된 결과물을 확인할 수 있습니다.

## 프로젝트 소개

이 프로젝트는 React, TypeScript, Fetch API를 활용해 구현한 개인 포트폴리오용 사용자 관리 대시보드입니다.
사용자 목록 조회부터 생성, 개별 수정, 일괄 수정, 개별 삭제, 선택 삭제까지 CRUD 전 과정을 하나의 화면에서 다룰 수 있도록 구성했습니다.
[reqres.in](https://reqres.in/) Mock API를 연동해 데이터를 관리하며, 로딩/에러 상태 처리, 폼 유효성 검사, 선택 기반 일괄 작업처럼 실제 프론트엔드에서 자주 마주치는 흐름을 직접 구현하는 데 초점을 맞췄습니다.

현재 버전은 fetch + useState 기반으로 데이터 흐름을 제어하고 있으며, 이후 TanStack Query의 `useQuery`, `useMutation` 기반 구조로 리팩터링할 계획입니다.

## 주요 기능

- 조회 (Read): 사용자 목록을 불러오고 로딩/에러 상태를 UI에 반영합니다.
- 생성 (Create): 신규 사용자 정보를 입력받아 유효성 검사 후 목록 상단에 추가합니다.
- 개별 수정 (Update): 특정 사용자의 정보를 수정하고 결과를 즉시 화면에 반영합니다.
- 일괄 수정 (Update): 여러 사용자를 한 번에 수정하고 응답 결과를 목록에 동기화합니다.
- 개별 삭제 (Delete): 특정 사용자를 삭제하고 목록에서 즉시 제거합니다.
- 선택 삭제 (Delete): 체크박스로 선택한 사용자들을 한 번에 삭제합니다.

## 동작 방식

- `UsersContainer`: 초기 렌더링 시 `getAllUsers()`를 호출하고, 로딩 상태와 에러 메시지를 화면에 제어합니다.
- `useUsersQuery`: `getAllUsers`, `createUser`, `modifyUser`, `modifyAllUsers`, `deleteUser`, `deleteSelectedUsers` 함수를 통해 CRUD 요청과 사용자 목록 상태를 관리합니다.
- `UsersProvider`: Context와 reducer를 사용해 생성 폼 상태, 수정 상태, 삭제 선택 상태를 분리 관리합니다.
- `users.api.ts`: Fetch API 호출을 전담하며 `reqres.in` Mock API와 통신합니다.
- `avatar` 유틸: 외부 아바타 URL을 프로젝트 내부 경로로 정규화해 일관된 이미지 로딩 흐름을 유지합니다.

## 기술 스택

- Core: React, TypeScript, Vite
- Form & Utility Libraries: React Hook Form, classnames
- Data Handling: Fetch API, Context API, useReducer, useState
- Styling: SCSS (Sass)
- Code Quality: ESLint, Prettier

## 실행 방법

```bash
npm install
npm run dev
# 브라우저에서 http://localhost:5173 접속
```

## 프로젝트 폴더 구조

프로젝트 폴더 구조는 다음과 같다. (주요 파일만 발췌)

```
src/
├── api/
│   └── users.api.ts          # Fetch API 호출 함수 분리
├── assets/
├── features/
│   └── users/
│       ├── components/
│       │   ├── Users.tsx             # 메인 컨테이너
│       │   ├── UsersControler.tsx    # 전체 선택/삭제 제어바
│       │   ├── UsersList.tsx         # 사용자 목록
│       │   ├── UsersItem.tsx         # 개별 사용자
│       │   ├── UsersNewForm.tsx      # 신규 생성 폼
│       │   └── ...
│       ├── containers/
│       │   └── UsersContainer.tsx    # 데이터 Fetching 및 전역 에러 핸들링
│       ├── context/
│       │   ├── UsersProvider.tsx     # Context Provider
│       │   └── useUsers.ts
│       └── index.ts
├── hooks/
│   └── useUsersQuery.ts      # API 요청 및 데이터 관리 훅
├── reducers/                 # UI 상태 관리 리듀서
│   └── usersReducer.ts
├── style/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## 기술 블로그 (프로젝트 기록)

프로젝트를 진행하며 마주친 문제와 해결 과정을 기술 블로그에 기록했습니다.

- [프로젝트 시리즈](https://velog.io/@ckstlr0828/series/%EC%8B%A4%EC%8A%B5)
- [GET : 초기 데이터 불러오기](https://velog.io/@ckstlr0828/CRUD1)
- [POST : 데이터 추가하기](https://velog.io/@ckstlr0828/CRUD2)
- [PATCH : 데이터 수정하기](https://velog.io/@ckstlr0828/CRUD3)
- [DELETE : 데이터 삭제하기](https://velog.io/@ckstlr0828/CRUD4)
- [Refactoring : 문제 분석과 해결 전략](https://velog.io/@ckstlr0828/fetchrefactoring1)
- [Refactoring : POST](https://velog.io/@ckstlr0828/fetchrefactoring2)
- [Refactoring : PATCH](https://velog.io/@ckstlr0828/fetchrefactoring3)
- [Refactoring : DELETE](https://velog.io/@ckstlr0828/fetchrefactoring4)
- [Refactoring : React Hook Form](https://velog.io/@ckstlr0828/fetchrefactoring5)
