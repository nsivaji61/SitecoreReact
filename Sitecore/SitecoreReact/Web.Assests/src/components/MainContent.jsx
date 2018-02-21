import React, { Component } from 'react';

class MainContent extends Component {

    render() {
        const data = this.props.data;
        return (
            <div>
                <p dangerouslySetInnerHTML={{ __html: data.MainContent }}></p>
            </div>
        );
    }
}

export default MainContent;