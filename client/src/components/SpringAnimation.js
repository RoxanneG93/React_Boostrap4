import React from 'react'
import { useSpring, animated } from 'react-spring';



const SpringAnimation = () => {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })
    // shorter
    // const fade = userSpring({ from: {opactiy: 0}, opactiy: 1});

    console.log(fade);
    return (
        <animated.div style={fade}>Spring Animation</animated.div>
    )

}

export default SpringAnimation;
