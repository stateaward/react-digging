# react-digging

## 시작하기

1. `npx create-react-app react-basic`
2. 해당 폴더 접근 `cd [folder]`
3. `npm start`

<br>

## 기본 작동 구조

1. `*.js` 의 파일 형태로 컴포넌트 생성

   ```jsx
   import React from 'react';

   function Hello() {
      return <div> 안녕하세요 </div>;
   }

   export default Hello;
   ```

   -  vue의 컴포넌트 생성과 동일하게,
      import와 export로 어디서 사용하는 어떤 컴포넌트임을 명시

2. `App.js` 에서 루트 컴포넌트 생성 및 `App`으로 추출

   ```jsx
   import React from 'react';
   import Hello from './Hello';

   function App() {
      return (
         <div>
            <Hello />
            <Hello />
            <Hello />
         </div>
      );
   }

   export default App;
   ```

3. `index.js` 에서 `ReactDOM.render` 를 통해 실제 DOM 내부에 리액트 컴포넌트를 랜더링

   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import reportWebVitals from './reportWebVitals';

   ReactDOM.render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,
      document.getElementById('root')
   );

   reportWebVitals();
   ```

   -  `root` 인 DOM은 `public/index.html` 에 존재

<br><br>

## 주의사항

리액트는 JSX(javascript를 확장한 문법)를 통해 작성됨
JSX의 영역은 `function App() { ~ }` 처럼 템플릿 코드 내부

리액트 컴포넌트에서 XML 형태로 작성하면, `bable` 이 JSX → Javascript로 변환

-  HTML 태그는 꼭 닫을 것 `</div>` `<br/>`
-  두개 이상의 태그는 꼭 하나의 태그로 감싸야함

   -  Fragment : 감싸기 애매하다면, `<>` 만으로 태그를 감쌀 수 있음  
      이 경우 랜더링하면 실제 엘리먼트로 나오지 않음

-  JSX 내부에 변수를 보여줄 땐, `{var}` 로 감싸기
-  스타일은 인라인 형태로 작성
-  `.css` 파일도 컴포넌트 처럼 import 필요
-  JSX 내부 주석은 `{/* 주석은 이렇게 */}` 의 형태

<br>

---

<br>

## props

### 기본 사용법

```jsx
App.js         // 부모
ㄴ Hello.js     // 자식
ㄴ Wrapper.js
```

부모 → 자식 : `'고길동'` 이란 이름을 넘김

props는 부모로부터 받는 데이터

**부모**

```jsx
function App() {
   return <Hello name="고길동" />;
}
```

-  해당 컴포넌트에 `변수명 = "변수"` 형태로 전달

---

### 여러개의 props 전달 (비구조화 할당)

부모 send (`App.js)` : `<Hello name="react" color="red"/>`

자식 receive (`Hello.js`)

```jsx
// 객체 형태의 props로 받기
function Hello(props) {
   return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
}

// 비구조화 할당(구조 분해) 로 받기
function Hello({ color, name }) {
   return <div style={{ color }}>안녕하세요 {name}</div>;
}
```

-  `{{ color }}` 중괄호가 두번 중복되는 이유는, `1. JSX 문법` `2. 객체 리터럴` 이라서.

### 만약, 해당 인자가 없다면? defaultProps

비구조화 할당으로 `function Hello({ color, name }) {...}` 두가지 파라미터를 받기로 했는데,

부모에서 `color` 만 줬다면? → `defaultProps`로 기본값 할당 (없다고 에러나진 않음)

```jsx
function Hello({ color, name }) {
   return <div style={{ color }}>안녕하세요 {name}</div>;
}

Hello.defaultProps = {
   name: '이름없음',
};
```

### props.children

-  컴포넌트 안에 들어가 있는 값을 조회하기 위한 예약어 (사용은 무조건 `{ childre. }` )
-  Wrapper의 입장 : 자기 태그 안에 있는 정보를 가져오기 위해 `children` 을 사용함
   -  `<Hello>` 컴포넌트도 하나의 변수인 셈

```jsx
// App.js
<Wrapper val="공부공부">
   <Hello name="react" color="red" />
   <Hello color="pink" />
</Wrapper>;

// Wrapper.js
function Wrapper({ children, val }) {
   return (
      <div style={style}>
         {children}
         {val}
      </div>
   );
}
```
