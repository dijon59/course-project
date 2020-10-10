import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28},
            { id: 'vassf1', name: 'Manu', age: 29},
            { id: 'asdf1', name: 'Stephanie', age: 26}
        ],
        otherState: 'Some other value',
        showPersons: false,
    };

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




// hooks
// const App = props => {
//     // Array distructuring
//     const [personState, setPersonState] = useState({
//     persons: [
//       {name: 'Max', age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 26}
//     ],
//     otherState: 'some other value'
//   });
//
//     const [otherState, setOtherState] = useState('some other value');
//     console.log(personState, otherState);
//     const switchNameHandler = () => {
//         setPersonState({
//           persons: [
//               {name: 'Dijon', age: 24},
//               {name: 'Manu', age: 29},
//               {name: 'Stephanie', age: 26}
//           ]
//       })
//     };
//       // jsx not html
//     return (
//         <div className='App'>
//         <h1>Hi, Hello world</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}> My person </Person>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}></Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age}></Person>
//         </div>
//     )
// };
