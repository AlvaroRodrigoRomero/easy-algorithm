import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import BubbleSort from '../views/sorting/bubbleSort';
import QuickSort from '../views/sorting/quickSort';
import Home from '../views/home';
import NotFound from '../views/404'
import BreadCrumbs from '../components/breadcrumbs'

export default class Container extends Component {
    render() {
        return (
            <div>
                <BreadCrumbs />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bubblesort" component={BubbleSort} />
                    <Route exact path="/quicksort" component={QuickSort} />
                    {/* <Route path="*" component={NotFound} /> */}
                </Switch>
            </div>
        )
    }
}