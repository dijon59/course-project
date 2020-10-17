import React, { Component } from 'react';
import classes from './Person.module.css'
import Aux from "../../../hoc/Aux";
import WithClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    // static property means that it can be accessed from outside without the need to instantiate
    // an object based on this class(Person)
    static contextType = AuthContext;
    //


    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // return true if react should continue update or return false if it shouldn't
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return nextProps.persons !== this.props.persons; // this is automatically done by PureComponent
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons.js] getSnapshotBeforeUpdate');
    //     return {message: 'Snapshot!'};
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('[Persons.js] componentDidUpdate');
    //     console.log(snapshot)
    // }
    // componentWillUnmount() {
    //     // this runs when the component has been removed
    //     console.log('[Person.js] componentWillUnmount');
    // }
    componentDidMount() {
        // this method executes after render
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }

    render() {
        return (
            // WithClass
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please login in</p>}
                <div>
                    <p onClick={this.props.click}>I'm a {this.props.name} and i am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input
                        type="text"
                        // ref={(inputEl) => {this.inputElement = inputEl }}
                        ref={this.inputElementRef}
                        onChange={this.props.changed}
                        value={this.props.name}/>
                </div>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};


export default WithClass(Person, classes.Person);
