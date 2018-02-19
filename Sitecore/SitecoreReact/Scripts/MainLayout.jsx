class Comment extends React.Component {
    state = { data: this.props.initialData };
    render() {
        return (
            <div className="comment">
                <h1 dangerouslySetInnerHTML={{ __html: this.state.data.PageTitle }}></h1>
                <p dangerouslySetInnerHTML={{ __html: this.state.data.PageBody }}></p>

                </div>
        );
    }
}