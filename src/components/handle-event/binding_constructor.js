import React, { Component } from 'react'

export default class binding_constructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.inputChangeConstructor = this.inputChangeConstructor.bind(this);
        
    }

    inputChangeConstructor(e) {
        this.setState({ input: e.target.value});
    }

    render() {
        return (
            <div>
                <p>Binding Method in Constructor</p>
                <input onChange={this.inputChangeConstructor} /><br />
                <p>Input value: {this.state.input}</p>
            </div>
        )
    }
}
