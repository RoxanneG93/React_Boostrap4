import React, { Component } from 'react'

export default class FlexboxTest extends Component {
    render() {
        return (

            <div class="container my-container">
                <div class="row my-row">
                    <div class="col-md-4 col-sm-6 my-col">
                        Row 1 Col 1
                        </div>
                    <div class="col-md-8 col-sm-6 my-col">
                        Row 1 Col 2
                        </div>
                </div>
                <div class="row justify-content-between align-items-stretch my-row">
                    <div class="col-4 my-col order-md-12">
                        Row 2 Col 1
                        </div>
                    <div class="col-4 offset-md-2 my-col align-self-start order-md-2">
                        Row 2 Col 2
                        </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="..." class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}
