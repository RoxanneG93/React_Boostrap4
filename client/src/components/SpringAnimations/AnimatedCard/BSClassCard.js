import React, { Component } from 'react'
import { Transition } from 'react-spring/renderprops';
import data from './data.js';

export default class BSClassCard extends Component {
    constructor() {
        super()
        this.state = {
            data: data,
            itemsToShow: 3,
            expanded: false
        }
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.state.itemsToShow === 3 ? (
            this.setState({ itemsToShow: this.state.data.length, expanded: true })
        ) : (
                this.setState({ itemsToShow: 3, expanded: false })
            )
    }



    render() {



        const { data } = this.state;
        let gridItems = data.map((data) => {

            return { ...data };
        })



        return (
            <div >
                {/* <Transition
                    items={data} keys={item => item.id}
                    from={{ opacity: 0, transform: 'translate3d(-20px,0,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0px,0,0)' }}
                    trail={500}
                //leave={{ transform: 'translate3d(0,-40px,0)' }}
                >
                    {item => props =>
                        <div style={props} style={{ borderStyle: 'solid', borderColor: 'red' }}>
                            <div class="shadow-sm card" style={{ width: '18rem', padding: '1rem', margin: '1rem', borderStyle: 'solid', borderColor: 'red' }}>
                                <img src={item.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    }
                </Transition> */}
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            {this.state.data.slice(0, this.state.itemsToShow).map((data, i) =>
                                <Transition
                                    items={data} keys={item => item.id}
                                    from={{ opacity: 0, transform: 'translate3d(-20px,0,0)' }}
                                    enter={{ opacity: 1, transform: 'translate3d(0px,0,0)' }}
                                    trail={500}
                                //leave={{ transform: 'translate3d(0,-40px,0)' }}
                                >
                                    {item => props =>
                                        <div style={props} className="col">
                                            <div class="shadow-sm card" style={{ width: '18rem', padding: '1rem', margin: '1rem' }}>
                                                <img src={item.image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </Transition>
                            )}


                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <a className="btn btn-primary" onClick={this.showMore}>
                                    {this.state.expanded ? (
                                        <span>Show less</span>
                                    ) : (
                                            <span>Show more</span>
                                        )}
                                </a>
                            </div>

                        </div>

                    </div>

                </React.Fragment>
            </div>
        )
    }
}
