import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home'
        }
    }

    greet() {
        alert('Hello from App!');
    }

    changeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }

    render() {
        let user = {
            name: 'Marija',
            age: 23,
            hobbies: ['photography', 'painting']
        };
        let user_2 = {
            name: 'Zika',
            age: 50,
            hobbies: ['eating', 'playing dominos']
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home user={user} greetFn={this.greet} changeLinkFn={this.changeLinkName.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app')); // first arg - what to render, second arg - where to render