import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Components/Persons/Person/Person';
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

// import Radium, { StyleRoot } from "radium";
// import styled from 'styled-components'

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red': 'green'};
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;
//
//     &:hover {
//         background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//         color: black;
//     }
// `;

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

    nameChangedHandler = (event, id) => {
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
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        // spread operator
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };


    render() {
        // const style = {
        //     backgroundColor: 'green',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     ':hover': {
        //         backgroundColor: 'salmon',
        //         color: 'black'
        //     }
        // };
        let persons = null;
        let btnClass = '';


        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}><Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/></ErrorBoundary>
                    })}
                </div>
            )
            btnClass = classes.Red;
        }
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push('red'); // classes = ['red']
        }
        if (this.state.persons.length <= 1 ) {
            assignedClasses.push('bold') // classes = ['red', 'bold']
        }
        return (
            <div className={classes.App}>
                <h1>Hi, Hello world</h1>
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button className={btnClass} onClick={this.togglePersonsHandler}>Switch Name
                </button>
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
