import React, { useState } from 'react';




function CounterHooks() {
    const [count, setCount] = useState(0);
    //setCount(2)
    return (
        <div>
            <h1>The Count is: {count} </h1>
            <button onClick={() => setCount("Hello!")} >Add 1</button>

        </div>
    )
}

export default CounterHooks;