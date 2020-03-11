import React, { Component } from 'react'
import copy from 'copy-to-clipboard'
class Copy extends Component {

    constructor() {
        super();
        this.state = {
            textToCopy: "Copy to Clipboard Demo!",
            btnText: "Copy to Clipboard"
          };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }


    handleInputChange(e) {
        this.setState({
            textToCopy: e.target.value,
            btnText: "Copy to clipboard"
        });
    }

    handleCopy() {
        copy(this.state.textToCopy);
        this.setState({btnText: "Copied!"});
    }



    render() {
        const { textToCopy, btnText } = this.state;
        return (
            <div>
                <h4>awalone - copy to clipboard</h4>
                <textarea value={textToCopy} onChange={this.handleInputChange} /><br /><br />
                <button onClick={this.handleCopy} disabled={btnText === "copied"} >
                    {btnText}
                </button>
            </div>
        )
    }
}
export default Copy;