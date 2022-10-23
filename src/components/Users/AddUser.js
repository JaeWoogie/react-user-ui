import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim() === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if(+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        console.log(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        console.log(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" >Username</label>
                <input onChange={usernameChangeHandler} value={enteredUsername} id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input onChange={ageChangeHandler} value={enteredAge} id="age" type="text" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;