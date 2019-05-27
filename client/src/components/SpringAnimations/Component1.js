import React from 'react'
import { Spring } from 'react-spring/renderprops';


export default function Component1() {
    return (

        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>

                    <div>
                        <h1>Component 1</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Veniam ducimus labore sed quisquam at praesentium, possimus mollitia suscipit obcaecati cumque voluptatem nostrum, repellat sint illo consectetur!
                        Quisquam atque temporibus ipsa.</p>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{ duration: 10000 }}
                        >
                            {props => (
                                <div style={props}>
                                    <h1 >
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>

            )}

        </Spring>
    )
}
