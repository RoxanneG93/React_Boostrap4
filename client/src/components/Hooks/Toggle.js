import { useState } from 'react';

function useToggle(initialVal = false) {
    // call useState, "reserve peice of state"
    const [state, setState] = useState(initialVal);
    // created generic function
    const toggle = () => {
        setState(!state);
    }
    // return peice of state and function to toggle it
    return [state, toggle];
}
export default useToggle;