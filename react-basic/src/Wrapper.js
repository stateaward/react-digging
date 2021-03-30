import React from 'react';

function Wrapper({ children, val }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
          { children}
          {val}
    </div>
  )
}

export default Wrapper;