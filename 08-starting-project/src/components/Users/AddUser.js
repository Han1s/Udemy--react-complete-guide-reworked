import React, { useState, Fragment } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState(null);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (!username.trim().length || !age.trim().length) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            });
            return;
        };
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            });
            return;
        };
        props.onAddUser(username, age);
        setAge('');
        setUsername('');
    }

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangedHandler = (event) => {
        setAge(event.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {
                error && <ErrorModal title={error.title} onConfirm={errorHandler} message={error.message} />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' onChange={usernameChangeHandler} value={username}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' onChange={ageChangedHandler} value={age}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;