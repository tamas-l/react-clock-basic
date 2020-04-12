import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clock TLA v6 - 12:01'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Clock />
            </div>
        );
    }
}
