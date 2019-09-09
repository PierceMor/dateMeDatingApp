import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider } from '@material-ui/styles';
import firebase from 'firebase';
import firebaseui from 'firebaseui';


var useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1, 
    },

})); //userStyles

export default function Header(){
    var classes = useStyles(); 

    return (
        <div className={classes.root}>
            <AppBar position="sticky" >
                <Toolbar>
                    <IconButton edge="static" className={classes.menuButton} color="inherit" aria-label='menu' >
                        <MenuIcon /> 
                    </IconButton>
                    <Typography variant='h6' align="center" className={classes.title} >
                        Date Me! 
                    </Typography>
                    <Button color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}//Header

