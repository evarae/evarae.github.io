import {Grid, Box, Toolbar, MenuItem, Menu, AppBar, Typography, Container, Button, Tooltip, IconButton, Avatar} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';
import logo from '../resources/images/metal.png'


function MyMenuIcon(props){

    const navigate = useNavigate();

    return (
        <Button
        disableRipple
        onClick={() => {navigate(props.path)}}
        sx={{ my: 2, bgcolor: 'transparent', color: 'black', display: 'block', textTransform: "none", m: 0,
        ':hover': {
            bgcolor: props.primary, 
            color: props.secondary}
        }}
        >
            {props.label}
        </Button>

    );
}

//Home bar
function CustomBar(props){

    return (
        <AppBar position="static" elevation={0} sx = {{bgcolor: 'transparent'}}>
        <Container maxWidth="xl" sx = {{p:0, m:0, bgcolor: 'transparent'}}>
            <Toolbar disableGutters variant="dense">

            <Box sx={{ flexGrow: 1, display: 'flex'}}>
                <MyMenuIcon label = "home" path = "/home" primary = "yellow"></MyMenuIcon>
                <MyMenuIcon label = "releases" path = "/releases" primary = "yellow"></MyMenuIcon>
                <MyMenuIcon label = "about" path = "/about" primary = "yellow"></MyMenuIcon>
                <MyMenuIcon label = "contact" path = "/contact" primary = "yellow"></MyMenuIcon>
                {<MyMenuIcon label = "press kit" path = "/presskit" primary = "yellow"></MyMenuIcon> && false}
              {/* <MyMenuIcon label = "gigs" path = "/gigs" primary = "yellow"></MyMenuIcon> */}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}

export default CustomBar