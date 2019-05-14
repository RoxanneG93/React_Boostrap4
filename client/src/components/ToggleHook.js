import React, { useState } from 'react';
import useToggle from './Hooks/Toggle';

function Toggler() {
    const [isHappy, setIsHappy] = useToggle(true);

    return (
        <div>
            <h1 onClick={setIsHappy}>{isHappy ? ":)" : ":( "}</h1>
        </div>
    )

}

export default Toggler;