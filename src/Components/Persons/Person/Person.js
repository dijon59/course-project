import React, { Component } from 'react';
import classes from './Person.module.css'

class Person extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // return true if react should continue update or return false if it shouldn't
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }
    componentWillUnmount() {
        // this runs when the component has been removed
        console.log('[Person.js] componentWillUnmount')
    }

    // console.log('[Person.js] rendering...');
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and i am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;
