import React, { Component } from "react";

class News extends Component {
    render() {
        let { title, content, date } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{date}</p>
            </div>
        );
    }
}

export default News;
