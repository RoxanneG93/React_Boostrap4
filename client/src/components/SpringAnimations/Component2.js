import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Component3 from './Component3';
import { Transition, animated } from 'react-spring/renderprops'
// import { Transition, animated } from 'react-spring';
// import {useTransition, animated} from 'react-spring'


const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}
const btn = {
    background: '#333',
    color: '#fff',
    padding: '1.rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}




class Component2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showComponent3: false
        }
        this.toggle = this.toggle.bind(this);


    }


    toggle(e) {
        this.setState({ showComponent3: !this.state.showComponent3 })
    }


    render() {
        return (
            <React.Fragment>

                <Spring
                    from={{ opacity: 0, }}
                    to={{ opacity: 1, }}
                    config={{ delay: 1000, duration: 1000 }}
                >
                    {props => (
                        <div style={props}>

                            <div style={c2Style}>
                                <h1>Component 2</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Veniam ducimus labore sed quisquam at praesentium, possimus mollitia suscipit obcaecati cumque voluptatem nostrum, repellat sint illo consectetur!
                        Quisquam atque temporibus ipsa.</p>
                                <button style={btn} onClick={this.toggle}>Toggle Component 3</button>
                            </div>
                        </div>

                    )}

                </Spring>
                <Transition
                    native
                    items={this.state.showComponent3}
                    from={{ opacity: 0, marginTop: -50 }}
                    enter={{ opacity: 1, marginTop: 0 }}
                    leave={{ opacity: 0, marginTop: -50 }}
                >
                    {show => show && (props => (
                        <animated.div style={props}>
                            <Component3 />
                        </animated.div>
                    )
                    )}
                </Transition>

            </React.Fragment>
        )
    }
}

export default Component2;
