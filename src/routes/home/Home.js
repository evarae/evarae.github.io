import './Home.css';
import {Grid, Box} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import useWindowDimensions from '../../components/windowDimensions';

const bandcampPath = "https://ripship.bandcamp.com";
const spotifyPath = "https://open.spotify.com/artist/1yx7HUETsdOE9oP6ISSVSX?si=NS-IbuAwSHaOMiOR70V1TA";
const instagramPath = "https://www.instagram.com/ripship_/";
const facebookPath = "https://www.facebook.com/ripshipband";
const onlyfansPath = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

//props = primary, secondary, link, label    
function MyButton(props) {
    return (
        <div>
            <Box sx={{border:1,
                ':hover': {
                bgcolor: props.primary, 
                color: props.secondary},
                p: 2
            }
            } onClick = {()=> {window.open(props.path, '_blank')}}>
            {props.label}</Box>
        </div>
    );
}

function Home() {

    const { height, width } = useWindowDimensions();

    return(
        <div className="Home">
            <label style ={{fontSize: (width/5), fontFamily: 'Pirata One'}} >RIPSHIP</label>
            <div>
                <p>Ripship is a band that writes songs. Sometimes they even make music. They are a music band.</p>
            </div>
            <customButton></customButton>
            <div style = {{margin: '5%'}}>
                <Grid container spacing={2}>

                <Grid item md={2.4} xs={6}>
                    <MyButton path = {bandcampPath} primary = "red" secondary = "lightBlue" label = "bandcamp"/>
                </Grid>

                <Grid item md={2.4} xs={6}>
                    <MyButton path = {spotifyPath} primary = "yellow" secondary = "blue" label = "spotify"/>
                </Grid>

                <Grid item md={2.4} xs={4}>
                    <MyButton path = {instagramPath} primary = "lightGreen" secondary = "blue" label = "instagram"/>
                </Grid>

                <Grid item md={2.4} xs={4}>
                    <MyButton path = {facebookPath} primary = "blue" secondary = "red" label = "facebook"/>
                </Grid>

                <Grid item md={2.4} xs={4}>
                    <MyButton path = {onlyfansPath} primary = "purple" secondary = "orange" label = "onlyfans"/>
                </Grid>
                
                </Grid>
            </div>
        </div>

    );
}

export default Home;