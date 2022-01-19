import {Grid, Box} from '@mui/material';
import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import * as React from 'react';


export const bandcampPath = "https://ripship.bandcamp.com";
export const spotifyPath = "https://open.spotify.com/artist/1yx7HUETsdOE9oP6ISSVSX?si=NS-IbuAwSHaOMiOR70V1TA";
export const instagramPath = "https://www.instagram.com/ripship_/";
export const facebookPath = "https://www.facebook.com/ripshipband";
export const onlyfansPath = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

//props = primary, secondary, link, label    
function LinkButton(props) {
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
        <div>
        <CustomBar></CustomBar>
        <div className='myStyle'>
            <text className = 'myHeader' style ={{fontSize: (width/5)}}>RIPSHIP</text>
            {/* <div>
                <p>Ripship is a band that writes songs. Sometimes they even make music. They are a music band.</p>
            </div> */}
            <div>
                <Grid container spacing={2}>

                <Grid item md={2.4} xs={6}>
                    <LinkButton path = {bandcampPath} primary = "red" secondary = "lightBlue" label = "bandcamp"/>
                </Grid>

                <Grid item md={2.4} xs={6}>
                    <LinkButton path = {spotifyPath} primary = "yellow" secondary = "blue" label = "spotify"/>
                </Grid>

                <Grid item md={2.4} xs={4}>
                    <LinkButton path = {instagramPath} primary = "lightGreen" secondary = "blue" label = "instagram"/>
                </Grid>

                <Grid item md={2.4} xs={4}>
                    <LinkButton path = {facebookPath} primary = "blue" secondary = "red" label = "facebook"/>
                </Grid>

                <Grid item md={2.4} xs={4}>
                    <LinkButton path = {onlyfansPath} primary = "purple" secondary = "orange" label = "onlyfans"/>
                </Grid>
                
                </Grid>
            </div>
        </div>
        </div>

    );
}

export default Home;