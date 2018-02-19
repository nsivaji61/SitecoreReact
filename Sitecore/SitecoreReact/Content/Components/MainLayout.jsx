//var React = require('react');

import React from "react";

class Comment extends React.Component {
  state = {
    data: {
      PageTitle: "This is Smaple",
      PageBody: "This is Sampa"
    }
  };
  render() {
    return (
      <div className="comment">
        <h1 dangerouslySetInnerHTML={{ __html: this.state.data.PageTitle }} />
        <p dangerouslySetInnerHTML={{ __html: this.state.data.PageBody }} />
      </div>
    );
  }
}

module.exports = Comment;
