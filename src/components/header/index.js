import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Typography,
    Toolbar,
    AppBar
} from '@material-ui/core'
class Header extends React.Component {
    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            <Router>
                                <Link to="/">Home</Link>
                                <Link to="/admin">Admin</Link>
                                <Link to="/customer">Customer</Link>
                            </Router>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}
export default Header;