import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter'

import './App.css';   // css 파일도 import

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <Hello name="고길동" color="red" />
      <div style={style}>{name}</div>
      <div className="gray-box">?</div>
      {/* 주석은 이렇게 */}

      <Wrapper val="발발">
        <Hello name="이창호씨" color="red" isVisit/>
        <Hello color="pink"/>
      </Wrapper>

      <hr></hr>

      <Counter />
    </>
  );
}

export default App;