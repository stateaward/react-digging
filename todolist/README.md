## 기본 설정

1. `npx create-react-app todolist` 로 프로젝트 생성
2. `cd todolist`
3. `npm install styled-components react-icons` 두개의 라이브러리 설치

<br><br>

## 프로젝트 시작

### VSCODE 기초 셋팅하기

-  `.js` 파일 리액트로 기본 설정하기
-  `fc` 예약어로 템플릿 생성 [[링크](https://falaner.tistory.com/66)]
-  `styled-component` 에서 자동완성 사용하기

<br><br>

### 글로벌 스타일 적용하기

`import { createGlobalStyle } from 'styled-components';`

```jsx
const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`;
```

`GlobalStyle` 변수 안에 ```` 으로 스타일 영역 생성하고, 안에 CSS 작성

적용은 템플릿 내부에 `<GlobalStyle />` 로!

⇒ CSS 파일로 작성할 필요 없이, 위 같은 방식으로도 해결할 수 있음!

<br><br>

### 스타일 블럭(변수) 안에 scss처럼 계층형 선언이 가능

아래처럼 스타일 마다 변수를 선언하지 않고,

```jsx
const TodoHeadBlock = styled.div``;
const DateText = styled.h1``;
```

scss처럼 CSS 셀렉터를 활용한 선언 및 활용이 가능

```jsx
const TodoHeadBlock = styled.div`
   h1 {
   }
   .day {
   }
   .tasks-left {
   }
`;
```

작성이 끝난 뒤엔 함수형으로 반환

```jsx
<TodoHeadBlock>
   <h1>2021년 4월 3일</h1>
   <div className="day">토요일</div>
   <div className="tasks-left">할 일 2개 남음</div>
</TodoHeadBlock>
```

<br><br>

### flex : 1

해당 요소를 감싸는 부모가 `flex` 로 설정 되어 있는 상태에서 `flex:1;` 설정시, 자신이 차지할 수 있는 모든 영역을 차지함.

<br><br>

### react-icons 에서 아이콘 사용하기

-  [링크](https://react-icons.github.io/react-icons/icons?name=md) 에서 원하는 아이콘 명 확인
-  `import { IconName } from "react-icons/md";` 의 형태로 해당 아이콘 임포트
-  `<MdDelete />` 의 형태로 컴포넌트 사용

<br><br>

### 스타일 컴포넌트 내부에서 특정 변수에 따라 적용하기

```jsx
// 나중에 props를 전달받았는데, done이면 css를 적용
const CheckCircle = styled.div`
	...
	${(props) =>
      props.done &&
      css`
         border: 1px solid #38d9a9;
         color: #38d9a9;
      `}
`;
```

-  화살표 함수를 통해 `function(props) {...}` 를 간단히 `${본인}` 안에 표현
   -  `${function(props){ 만약 props값이 done이면, css를 바꿔라! }}`
-  위 코드는 기본적으로 **단축 논리 계산법** 을 적용함. `타겟 값이 true면 && 여길 실행한다`
-  ` css ``` 를 통해 css를 변경하는데, 이는  `import styled, { css } from 'styled-components';` 를 해줬기 때문에 가능함

<br><br>

### 스타일 컴포넌트 내부에서 다른 컴포넌트 스타일을 변경하기

```jsx
const TodoItemBlock = styled.div`
   ... &:hover {
      // Remove는 최초엔 안보이다가, 호버시에 보이게 해야함
      ${Remove} {
         // 실제로 나중에 Remove 컴포넌트의 스타일 이름이 들어옴
         display: initial;
      }
   }
`;
```

위 코드는 `TodoItemBlock` 위에 호버를 하게 되면, 선언한 `Remove` 컴포넌트의 스타일을 변경하겠다는 의미

-  [Component Selector](https://styled-components.com/docs/advanced#referring-to-other-components) 를 사용한 기능

<br><br>

### 코딩간 마주친 CSS 팁들

-  기존에 `transform`을 했다면, 추가적인 애니메이션에서도 그것을 유지해야함
-  `box-sizing: border-box; // 패딩 넘침 방지`
