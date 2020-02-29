import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class TitleComponent extends Component {
    render() {
        var defaultTitle = "React App";
        var title = this.props.title;
        return (
            <Helmet>
                <title>{title ? title : defaultTitle}</title>
            </Helmet>
        );
    }
}

