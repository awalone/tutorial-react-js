import React, { Component } from 'react'

export default class binding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    inputChange(e) {
        this.setState({input: e.target.value});
    }

    render() {
        return (
            <div>
                <p>Binding Method</p>
                <input onChange={this.inputChange.bind(this)} /><br />
                <p>Input value: {this.state.input}</p>
            </div>
        );
    }
}
