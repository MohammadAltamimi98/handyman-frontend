import React from 'react';
import { TextField, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    Card: {
        marginLeft: 'auto',
        paddingTop: 100
    }
}));
function Customer() {
    const classes = useStyles();
    return (
        <>
            <form className={classes.Card} noValidate autoComplete="off">
                <div>
                    <TextField id="standard-required" placeholder="Enter your name" />

                </div>
            </form>

        </>
    )

}
export default Customer;