import React, { Component } from 'react';
import $ from 'jquery'  ;


export class Home extends Component {
componentWillMount() {
    const div = $('h1')
    console.log(div);
}


    render() {
        return (
            <div>
                Hello React
            </div>
        )
    }
}

export default Home
