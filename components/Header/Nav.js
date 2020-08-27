import React, { Component } from "react";
import i18next from "i18next";

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="#news">{i18next.t("nav_news")}</a>
                </li>
                <li>
                    <a href="#form">{i18next.t("nav_feedback")}</a>
                </li>
            </ul>
        );
    }
}

export default Nav;
