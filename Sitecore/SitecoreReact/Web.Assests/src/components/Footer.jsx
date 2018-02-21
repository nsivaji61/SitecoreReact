import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <p dangerouslySetInnerHTML={{ __html: data.FooterContent }}></p>
            </div>
        );
    }
}

export default Footer;