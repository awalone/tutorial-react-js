import React, { Component } from 'react'

export default class event_handling extends Component {

    constructor(){
        super();
        this.state={
          num:10
        }
        this.increment=this.increment.bind(this);
      }

    increment() {
        this.setState({
            num: this.state.num + 1
        })
    }

    decrement = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <div>{this.state.num}</div>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
