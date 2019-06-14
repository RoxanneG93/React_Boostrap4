import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props);
        console.log("I am the Form props");
        console.log(props);
    }

    state = {
        name: 'Roxanne',
        lastName: 'Garcia'
    }
    render() {
        return (
            <div>
                <h1>{this.state.name } {this.state.lastName}</h1>
                
            </div>
        )
    }
}
