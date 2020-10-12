import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor')
    }
    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28},
            { id: 'vassf1', name: 'Manu', age: 29},
            { id: 'asdf1', name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value',
        showPersons: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate' )
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate')
    }

    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };


    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };


    deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons.slice();
        // spread operator
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };


    render() {
        console.log('[App.js] render')
        let persons = null;


        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons persons={this.state.persons}
                             clicked={this.deletePersonHandler}
                             changed={this.nameChangedHandler}/>
                </div>
            )
        }
        return (
            <div className={classes.App}>
                <Cockpit
                    persons={this.state.persons}
                    click={this.togglePersonsHandler}
                    showPerson={this.state.showPersons}/>
                {persons}
            </div>
        );
    }
}


export default App;
