## Routing

어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정

- Router : 데이터의 경로를 실시간으로 지정해주는 역할을 하는 무언가
- Page Routing : 브라우저에서 특정 경로(URL, /home)을 통해 웹 서버의 웹 파일을 불러오는 일련의 과정
- MPA: Multi Page Application
  - 페이지 이동이 일어나기 때문에 화면이 깜빡임
- SPA: Single Page Application
  - index.html만 있고, 해당 파일 내에서 리-렌더링만 진행하는 방식
  - 서버로 이동하지 않고 리액트 서버가 바로 업데이트를 처리하는 방식
    - 물론, 데이터는 서버로부터 받아와야 한다.
  - 화면의 깜빡임이 거의 보이지 않음
  - `CSR(Client Side Rendering)`

## React Router Dom v6

- 리액트에서 CSR 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리
- **Path Variable** : `useParams`
  - n번 일기 페이지(/diary/23)
- **Query String** : `useSearchParams`
- Page Moving : `useNavigate`

## 기초 공사

1. 폰트 세팅

- 폰트: `.css`에 import하고, css 설정 진행. 마지막 줄, 가장 왼쪽에 있는 폰트가 우선 적용된다.

2. 레이아웃 세팅(공통 부분)

- `@media` : 반응형 웹을 만들 때 사용 가능한 태그(화면 크기에 따른 css 적용)

3. 이미지 에셋 세팅
4. 공통 컴포넌트 세팅

---

5. 상태 관리 세팅

- <App /> : 일기 데이터 State
- <ReactRouter />
  - <Home />
  - <New />
  - <Edit />
  - <Dairy />

6. 프로젝트 State Context 세팅

- Provider로 공급

7. 프로젝트 Dispatch Context 세팅

## Web Storage

- Web Storage API는 브라우저에서 키/값 쌍을 쿠키보다 훨씬 직관적으로 저장할 수 있는 방법을 제공한다.
- `sessionStorage`는 각각의 출처(`origin`)에 대해 독립적인 저장 공간을 페이지 세션이 유지되는 동안 제공한다.
  - 데이터를 절대 서버로 전송하지 않으며, 저장 공간이 쿠키보다 크다.(최대 5MB)
- `localStorage`는 sessionStorage와 같지만 브라우저를 닫았다 열어도 데이터가 남아있다.
  - 유효기간 없이 데이터를 저장하고, JavaScript를 사용하거나 브라우저 캐시 또는 로컬 저장 데이터를 지워야만 사라진다.
  - 저장 공간이 셋 중 가장 크다.
- `window.***Storage` 속성을 통해 사용할 수 있다.
  - 지원하는 브라우저에서는 WindowLocalStorage와 WindowSessionStorage 객체를 구현한다.

## ETC

- 리액트 라우터를 사용하게 되면 `<a> 태그`는 외부 링크 이동에만 사용한다.
- Query String = `?id=10&mode=dark`
