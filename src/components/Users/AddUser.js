import React, { useState, useRef } from 'react';
import Wrapper from '../Helpers/Wrapper';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errorState, setErrorState] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if(enteredName.trim() === 0 || enteredUserAge.trim().length === 0) {
            setErrorState(true);
            return;
        }
        if(+enteredUserAge < 1) {
                setErrorState(true);
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value ='';
        ageInputRef.current.value ='';
    }

    const usernameChangeHandler = (event) => {
        // setEnteredUsername(event.target.value);
        console.log(event.target.value)
    }

    const ageChangeHandler = (event) => {
        // setEnteredAge(event.target.value);
        console.log(event.target.value);
    }

    const errorHandler = () => {
        setErrorState(null);
    }

    return (
        <Wrapper>
            {errorState && <ErrorModal title="An error occured!" message="Something went wrong!" onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input onChange={usernameChangeHandler} id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (Years)</label>
                    <input onChange={ageChangeHandler} id="age" type="text" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;