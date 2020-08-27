import React, { Component } from "react";
import News from "./News";

class NewsList extends Component {

    render() {
        let {news} = this.props;
        console.log(this.props)
        // let newsList = news.slice(0, 3).map((news, index) => {
        //     <News
        //         title={news.title}
        //         content={news.content}
        //         date={news.publishedAt.slice(0, 10)}
        //     />;
        //     console.log(news);
        //     console.log(<News />);
        //     console.log(newsList)
        // });
        // return <div>{newsList}</div>;
        return <div>123</div>;
    }
}

export default NewsList;
