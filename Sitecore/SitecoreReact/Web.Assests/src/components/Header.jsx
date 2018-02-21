import React, { Component } from 'react';

class Header extends Component {

    render() {
        const data = this.props.data;

        return (
            <div>
                <p dangerouslySetInnerHTML={{ __html: data.HeaderContent }}></p>

            </div>
        );
    }
}

export default Header;