import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
   flex: 1;
   padding: 20px 32px;
   padding-bottom: 48px;
   overflow-y: auto; // 나중에 많아지면, 이 영역만 자동으로 스크롤!
   //background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
   return (
      <TodoListBlock>
         <TodoItem text="프로젝트 생성하기" done={true}></TodoItem>
         <TodoItem text="이삭토스트 먹기" done={false}></TodoItem>
         <TodoItem text="1일 1커밋하기" done={true}></TodoItem>
         <TodoItem text="리액트 공부 정리하기" done={false}></TodoItem>
      </TodoListBlock>
   );
}

export default TodoList;
