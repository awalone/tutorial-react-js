import React, { Component } from 'react'

export default class binding_arrow_function extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    inputChangeArrorFunction(e) {
        this.setState({input:e.target.value});
    }

    render() {
        return (
            <div>
                <p>Binding method with arrow function</p>
                <input onChange={(e) => this.inputChangeArrorFunction(e)} /><br />
                <p>Input Value : {this.state.input}</p>
            </div>
        );
    }
}
