//allows for a user to sign in to their already created profile

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const classes = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    testField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function SignIn() {

    return (
        <div className={classes.container}>
            <TextField
                label="Email"
                id="SignInEmail"
                type='email'
                variant='filled'
                className={classes.TextField}
            />
            <TextField
                label="Password"
                id="SignInPassword"
                type='password'
                variant='filled'
                className={classes.TextField}
            />
        </div>
    )
}