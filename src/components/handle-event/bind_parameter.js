import React, { Component } from 'react'

export default class bind_parameter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    inputChangeParameters(p1,p2,e) {
        console.log('Params1: ', p1);
        console.log('Params2: ', p2);
        this.setState({input: e.target.value});
    }



    render() {
        return (
            <div>
                <p>Binding method with parameters</p>            
                <input onChange={this.inputChangeParameters.bind(this, 'parameter 1','parameter 2')} /><br />
                <p>Input value: {this.state.input}</p>
            </div>
        )
    }
}
