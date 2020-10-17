import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    // componentWillUnmount() {
    //     // this runs when the component is removed
    //     console.log('[Persons.js] componentWillUnmount');
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return true;
    // }

    render() {
        return (
            this.props.persons.map(( person, index ) => {
                console.log('[Persons.js] rendering...');
                return <Person
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                    />
            })
        )
    }
}

export default Persons;
