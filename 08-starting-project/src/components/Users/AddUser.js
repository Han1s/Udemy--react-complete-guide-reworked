import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (!username.trim().length || !age.trim().length) return;
        if (+age < 1) return;

        console.log(username);
        console.log(age);
        setAge('');
        setUsername('');
    }

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const ageChangedHandler = (event) => {
        setAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' onChange={usernameChangeHandler} value={username}/>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' onChange={ageChangedHandler} value={age}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;