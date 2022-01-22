import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import "../../index.css"
import {Grid, Box} from '@mui/material';
import { bandcampPath, spotifyPath, facebookPath, instagramPath } from '../home/Home';
import octopus from '../../resources/images/octopus.jpeg'

const email = "ripshipband@gmail.com";

function Contact() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
        <CustomBar></CustomBar>
        <div className = 'myStyle'>
            <text className='myHeader'>Contact</text>
            <div style = {{marginTop: '20px', marginBottom: '20px'}}>
            <Grid container spacing={2}>
                <Grid item md = {6} xs = {12}>
                    <Box sx = {{backgroundColor: 'pink',  height: '100%', border: 1, borderColor: 'red'}}>
                    <div className = 'myText' style={{padding: '4%'}}>
                            <text style={{paddingBottom: '4%', paddingTop: '4%'}}>
                                For gigs and general shenanigans email us at <a href={`mailto:${email}`}>{email}</a>
                            </text>
                            <div style = {{marginTop: '20px', marginBottom: '20px'}}>
                                <text >Ripship is online at {"\n"} </text>
                                <a style = {{color: 'blue'}} href= {instagramPath} target="_blank"> instagram (@ripship_) </a><text> and </text>
                                <a style = {{color: 'blue'}} href= {facebookPath} target="_blank"> facebook </a>
                            </div>
                         </div>
                    </Box>
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <img
                        src={octopus}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                </Grid>
            </Grid>
            </div>
        </div>
    </div>


        // <div>
        //     <CustomBar></CustomBar>
        //     <div className = 'myStyle'>
        //         <text className='myHeader'>Contact</text>
        //         <div style = {{marginTop: '20px', marginBottom: '20px'}}>
        //                 <text className='myText' style={{paddingBottom: '4%', paddingTop: '4%'}}>
        //                     For gigs and general shenanigans email us at <a href={`mailto:${email}`}>{email}</a>
        //                 </text>
        //                 <div className = 'myText'>
        //                     <text>Ripship is Online:{"\n"} </text>
        //                     <div></div>
        //                     <a style = {{color: 'blue'}} href= {instagramPath} target="_blank"> instagram: @ripship_</a>
        //                     <div></div>
        //                     <a style = {{color: 'blue'}} href= {facebookPath} target="_blank"> facebook </a>
        //                 </div>

        //         </div>
        //     </div>
        // </div>
        

    );
}

export default Contact;