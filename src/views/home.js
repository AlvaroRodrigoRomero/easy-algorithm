import React, { Component } from "react"
import TitleComponent from '../components/header/titleComponent'

export default class Home extends Component {
    render() {
        return (
            <div>
                <TitleComponent title="Easy Algorithm" />
                Home
            </div>
        )
    }
}