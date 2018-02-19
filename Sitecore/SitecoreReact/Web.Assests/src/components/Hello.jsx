import React, {
    Component
} from 'react';

class Home extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <p dangerouslySetInnerHTML={{ __html: data.PageTitle }}></p>
                <p dangerouslySetInnerHTML={{ __html: data.PageBody }}></p>
            </div>

        )
    }
}
export default Home;
//module.exports = Home;