import React from 'react';

export default class submitSermon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitUrl: {
                link: props.link
            }
        }
    }

    handleSubmitLink(event) {
        var submitUrl = this.state.submitUrl;
        submitUrl.link = event.target.value;

        this.setState({ submitUrl: submitUrl });
    }

    handleButtonClicked() {
        return (this.submitUrl.link);
    }

    render() {
        return (
            <div>
                <label>URL:</label>
                <input type="text" value={this.state.submitUrl.link} onChange={this.handleLink.bind(this)} />
                <br />
                <button type="submit" onClick={this.handleButtonClicked.bind(this)}>Submit URL</button>
            </div>
        );
    }
}
