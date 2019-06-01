import React from 'react';
import { useTransition, animated as a, config } from 'react-spring'
import data from './data.js';


function BSCard() {

    let gridItems = data.map((data) => {
        //const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
        //const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
        return { ...data };
    })


    // This turns gridItems into transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, item => item.id, {
        from: { opacity: 0, transform: 'translate3d(-40px,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0,0)' },
        //update: ({ xy, width, height }) => ({ xy, width, height }),
        //leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 300
    })
    return (
        <React.Fragment>
            {transitions.map(({ item, props, key }) => (
                <a.div key={key} style={props} >
                    <div class="shadow-sm card" style={{ width: '18rem', padding: '1rem', margin: '1rem' }}>
                        <img src={item.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </a.div>
            ))}



        </React.Fragment>
    )
}

export default BSCard;
