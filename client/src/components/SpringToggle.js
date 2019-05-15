import React , {useState}from 'react';
import { useSpring, animated } from 'react-spring';

const SpringToggle = () => {

    const [isToggled, setToggle] = useState(true);
    const fade1 = useSpring({
        opactiy: isToggled ? 1 : 0
    })
    console.log(isToggled);
  return (
    <div>
      <animated.h1 style={fade1}>Spring Fade</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  )
}

export default SpringToggle;
