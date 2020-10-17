import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const Cockpit = ( props ) => {
    // useEffect(() => {
    //     console.log(props.persons)
    //     // this will execute for every render cycle of the cockpit
    //     // it runs for every update
    //     console.log('[Cockpit.js] useEffect')
    //     // Http request...
    //     setTimeout(() =>{
    //         alert('Saved data to cloud');
    //     }, 1000);
    // }, [props.persons]); // this should executes when persons change

    useEffect(() => {
        setTimeout(() =>{
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');} // this runs before the main useEffect
        // function runs, but after the first render cycle. and runs when the component is removed

    }, []); // this tells react that this effect has no dependencies and should re-run whenever one of
                 // the dependencies changes which is means in this case it will run only once.

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })


    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1 ) {
        assignedClasses.push(classes.bold) // classes = ['red', 'bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, Hello world</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.click}>Switch Name
            </button>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default Cockpit;
