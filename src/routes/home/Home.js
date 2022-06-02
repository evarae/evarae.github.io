import {Grid, Box} from '@mui/material';
import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import * as React from 'react';
import logo from '../../resources/images/metal.png'


export const bandcampPath = "https://ripship.bandcamp.com";
export const spotifyPath = "https://open.spotify.com/artist/1yx7HUETsdOE9oP6ISSVSX?si=NS-IbuAwSHaOMiOR70V1TA";
export const instagramPath = "https://www.instagram.com/ripship_/";
export const facebookPath = "https://www.facebook.com/ripshipband";
export const onlyfansPath = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

//props = primary, secondary, link, label    
export function LinkButton(props) {
    return (
        <div>
            <Box sx={{border:1, bgcolor: 'white',
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
        <CustomBar isHome = {true}></CustomBar>
        <div style = {{textAlign: "center"}}>
            { width < 600 &&
                <img
                src={logo} alt={"image"} loading="lazy"
                style = {{maxHeight: (width*0.75*0.95), maxWidth: (width*0.95)}}
                />
            }
            { width >= 600 &&
                <img
                src={logo} alt={"image"} loading="lazy"
                style = {{maxHeight: (width*0.75*0.7), maxWidth: (width*0.7), marginBottom: '-8%', marginTop: '-2%'}}
                />
            }
            <div className='myStyle'>
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