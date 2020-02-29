import React, { Component } from 'react'
import TitleComponent from '../components/header/titleComponent'

export default class NotFound extends Component{
    render(){
        return (
            <div>
                <TitleComponent title="404 | Page not found" />
                 Content not found. 404 error
            </div>
        )
    }
}