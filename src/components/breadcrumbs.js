import React, { Component } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default class BreadCrumbs extends Component {
    generateBreadCrumbs(pathname) {
        var paths = pathname.split("/");
        paths = paths[paths.length - 1] === "" ? paths.slice(0, paths.length - 1) : paths;
        paths = paths[1] === "" ? paths.slice(1) : paths;
        var breadcrumb = paths.map((path, index) => {
            if (index === 0)
                return ({ path: "/", name: "Home" });

            var url = paths.slice(0, index + 1).join('/');
            return ({ path: url, name: path.replace(/%20/g, " ") });
        });
        return (breadcrumb);
    }

    render() {
        var breadcrumb = this.generateBreadCrumbs(window.location.pathname);
        if (breadcrumb.length > 1)
            return (
                <Breadcrumb>
                    {breadcrumb.map((item, index) => {
                        return <Breadcrumb.Item
                            key={index}
                            active={index === breadcrumb.length - 1}
                            href={item.path}>{item.name}
                        </Breadcrumb.Item>
                    })}
                </Breadcrumb>
            )
        else
            return (null)
    }
}