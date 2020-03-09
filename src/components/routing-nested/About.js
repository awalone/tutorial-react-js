import React, { Component } from 'react'

export default class About extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                <h4>About</h4>
                <p>This is about page</p>
                {params.id ? <b>ID: {params.id}</b> : <i>ID is optional.</i>}
                <i>ID is optional</i>
            </div>
        )
    }
}
