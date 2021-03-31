import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onPlus = () => {
        console.log('+1');
        setNumber(number + 1);
    };
    const onMinus = () => {
        console.log('-1');
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{ number }</h1>
            <button onClick={onPlus}>+1</button>
            <button onClick={onMinus}>-1</button>
        </div>
    );
}

export default Counter;