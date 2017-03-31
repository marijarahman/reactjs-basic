import React from 'react';

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: props.user.name,
            age: props.user.age,
            hobbies: props.user.hobbies,
            homeLink: 'Changed Link'
        }
    }

    makeMeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    changeLink() {
        this.props.changeLinkFn(this.state.homeLink);
    }

    render() {
        return (
            <div>
                <p>Hello! Your name is {this.state.name}.</p>
                <p>Your age is {this.state.age}.</p>
                <p>And you like:</p>
                <ul>
                    {this.state.hobbies.map((hobby, i) =>
                        <li key={i}>{hobby}</li>
                    )}
                </ul>
                <button className="btn btn-primary" onClick={this.makeMeOlder.bind(this)}>Make me older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greetFn}>Click me!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.changeLink.bind(this)}>Change Header Link</button>
            </div>
        )
    }
}

Home.propTypes = {
  user: React.PropTypes.shape({
      name: React.PropTypes.string,
      age: React.PropTypes.number,
      hobbies: React.PropTypes.arrayOf(React.PropTypes.string)
  }),
    greetFn: React.PropTypes.func
};