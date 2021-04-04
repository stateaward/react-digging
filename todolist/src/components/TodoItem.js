import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   border: 1px solid #ced4da;
   font-size: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   cursor: pointer;

   // 나중에 props를 전달받았는데, done이면 css를 적용
   ${(props) =>
      props.done &&
      css`
         border: 1px solid #38d9a9;
         color: #38d9a9;
      `}
`;

const Text = styled.div`
   flex: 1;
   font-size: 21px;
   color: #495057;
   ${(props) =>
      props.done &&
      css`
         color: #ced4da;
      `}
`;

const Remove = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   color: #dee2e6;
   font-size: 24px;
   cursor: pointer;
   &:hover {
      color: #ff6b6b;
   }

   display: none; // 맨 처음엔 안보게, 호버시에만
`;

const TodoItemBlock = styled.div`
   display: flex;
   align-items: center;
   padding-top: 12px;
   padding-bottom: 12px;

   // Remove는 최초엔 안보이다가, 호버시에 보이게 해야함
   &:hover {
      ${Remove} {
         // 실제로 나중에 Remove 컴포넌트의 스타일 이름이 들어옴
         display: initial;
      }
   }
`;

function TodoItem({ id, done, text }) {
   return (
      <TodoItemBlock>
         <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
         <Text done={done}>{text}</Text>
         <Remove>
            <MdDelete />
         </Remove>
      </TodoItemBlock>
   );
}

export default TodoItem;
