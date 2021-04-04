import React from 'react';

function Hello(props) {
   return (
      <div style={{ color: props.color }}>
         안녕하세요 {props.name}
         <br></br>
         {props.isVisit && <b>당신은 방문한 적이 있군요!</b>}
      </div>
   );
}

// Hello.defaultProps = {
//    name: '이름없음',
//    color: 'gray',
//  }

export default Hello;
