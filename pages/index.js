import Head from "next/head";
import React, { Component } from "react";
import Header from "../components/Header/Header";
import i18next from "i18next";
import NewsList from "../components/News/NewsList";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: false,
        };
    }

    componentWillMount() {
        this.setLanguage();
    }

    setLanguage = () => {
        let language = this.state.lang ? "en" : "ru";
        this.setState({
            lang: !this.state.lang,
        });

        i18next.init({
            lng: language,
            resources: require(`./languages/${language}.json`),
        });
    };
    gettingNews = async () => {
        let apiKey = "266ba28e8b784a79bb9fbec80f0decfb";
        let apiURL = await fetch(
            `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        let data = await apiURL.json();
        console.log(data.articles);
        return data.articles;
    };
    render() {

        return (
            <div>
                <Head>
                    <title>Test task</title>
                </Head>
                <Header />
                <button onClick={this.setLanguage}>
                    {i18next.t("change_lang_button")}
                </button>
                <NewsList news={this.gettingNews()} />
            </div>
        );
    }
}
