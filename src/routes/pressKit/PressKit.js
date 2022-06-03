import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import "../../index.css"
import {Grid, Box, Link} from '@mui/material';
import Gallery from "../../components/Gallery";
import BioBox from "../../components/BioBox";
import Feb21Review from "../../components/Review_Feb21_13Floor";
import May22Review from "../../components/Review_May22_MusicNet";
import Oct19Review from "../../components/Review_Oct19_13Floor";
import {LinkButton} from "../home/Home";
import backVinyl from "../../resources/images/fearsomeEngine/BackCoverVinylMockup.png"
import frontVinyl from "../../resources/images/fearsomeEngine/VinylMockupFront.png"
import gatefold from "../../resources/images/fearsomeEngine/GatefoldMockup.png"
import fearsomeFront from "../../resources/images/fearsomeEngine/FearsomeEngineCoverMockup.png"

import {instagramPath, bandcampPath, facebookPath, spotifyPath} from "../home/Home";
import * as React from "react";

function PressKit() {

    const { height, width } = useWindowDimensions();
    const review = Feb21Review();
    const review2= May22Review();
    const review3 = Oct19Review();
    const dropBoxPath = "https://www.dropbox.com/s/9fy3f2f95o041zn/Ripship_EPK.zip?dl=0"

    const fearsomeBlurb = <text><i>Fearsome Engine</i> is the upcoming debut LP of sci-fi psych-rock duo Ripship. The nine-track album is an evolution of their genre-bending 2020 EP <i>Greebles</i>, expanding on themes of space exploration, technological anxiety and exponential growth. With the help of producer Peter Ruddell, <i>Fearsome Engine</i> makes no compromises. Lush synthetic soundscapes ebb and flow over polyrhythmic drum grooves and crushing guitars, and vocoded vocals provide robotic low-end. An uneasy sense of existential dread lies just beneath the goofy, tongue-in-cheek lyricism of Lincoln and McLean. The opening track, <i>The Great Filter</i>, begins with the division of cells in a systematically noisy march. The closer, <i>B13</i>, guides the listener through an eldritch nightmare. From computer supremacy to climate change, <i>Fearsome Engine</i> is an album about everything that ever was, and everything that will ever be.</text>
    const greatFilter = "follows intelligent life from the division of the first cells to the beginning of space exploration. Pounding rhythms and abrasive timbres respond to the question “Are we alone?” with “What if we aren’t?”"
    const fearsomeEngine = "explores the concept of escapism through a psychedelic digital hivemind. The title track represents all that is Ripship: odd rhythms, heavy guitars, digital mania and a chorus to end all choruses."
    const cloudSeeder = "finishes with a monumental stoner-rock jam that conjures scenes of endless desert on a planet ravaged by climate change."
    const katamari = "What if you kept eating until you were the biggest thing, and there was nothing left to eat besides yourself?"
    const spyre = "is a mountain that seems to reach up to infinity. It’s always been there. It always will be. A desperate and melodic chorus dissipates into a wet, bubbling synth-scape. "
    const online = "opens side B with a more hopeful prediction of the future, with a civilisation at the beginning of their journey to the stars. Retro synths and groovy polyrhythms interjected with wall-of-noise guitar tones set up a jammy outro unlike any other Ripship track."
    const moores = "is a first-person perspective of the life of a power-hungry AI. From prog to acid to metal, there are more genres in this song than there are on most albums."
    const insufficient = "is essentially Asimov’s The Final Question put to music. A classic guitar-drums-vocoder Ripship track, this song encapsulates humanity’s hopelessness through ascending melodies, accelerating tempos and desperate, demanding lyricism."
    const b13 = "is a haunting track birthed from an unstructured jam over a descending bass melody. The closer is a surprisingly human track for a band that focuses mainly on technological themes, sitting restlessly in the uncanny valley."

    // div {
    //     white-space: pre-wrap;
    // }

    function DownloadButton(){
        return(
            <div style={{width: "200px", margin: 'auto', marginTop: '20px'}}>
                <LinkButton path = {dropBoxPath} primary = "yellow" secondary = "blue" label = "Download EPK"/>
            </div>
        );
    }

    return(
        <div>
            <CustomBar></CustomBar>
            <div className = 'myStyle'>
                <text className='myHeader'>Electronic Press Kit</text>
                <DownloadButton></DownloadButton>
                <div style = {{marginTop: '20px', marginBottom: '20px', whiteSpace: 'pre-wrap'}}>
                    <Box sx = {{backgroundColor: 'white',  height: '100%', border: 2, borderColor: 'cornflowerBlue', marginBottom: '20px', padding: '20px'}}>
                        <text className='mySubHeader'>Bio</text>
                        <BioBox></BioBox>
                        <div style={{height:'10px'}}></div>
                    </Box>
                    <Box sx = {{backgroundColor: 'white',  height: '100%', border: 2, borderColor: 'plum', marginBottom: '20px', padding: '20px'}}>
                        <text className='mySubHeader'>Reviews</text>
                        <div style={{padding: "20px"}}>
                            <text className='myText' style={{fontStyle: 'italic'}}>"{review2}" - <Link target={'_blank'} href='https://www.muzic.net.nz/articles/reviews/93399/daniel-armstrong-the-monsoons-gig-review-daniel-armstrong-the-monsoons-the-tuning-fork-auckland-27052022?fbclid=IwAR1oVEkqk2gRC2JFhjtJAlzu-ycyQjyCUzRh50sNEV-L4ifBPQ7Eb5I9sIY'> Muzic.net, May 2022 </Link></text>
                            <div style={{height: '20px'}}></div>
                            <text className='myText' style={{fontStyle: 'italic'}}>"{review}" - <Link target={'_blank'} href='https://www.13thfloor.co.nz/concert-review-dartz-whammy-bar-auckland-13-february-2021/?fbclid=IwAR0_8Q-G7F_Znm25WYbulSISgdBmnGTQALWeFedOFzPX8gHIode-IJgyWc4'> 13th Floor, Feb 2021</Link></text>
                            <div style={{height: '20px'}}></div>
                            <text className='myText' style={{fontStyle: 'italic'}}>"{review3}" - <Link target={'_blank'} href='https://www.13thfloor.co.nz/concert-review-whammyfest-2019-night-one-whammy-bar-october-25-2019/?fbclid=IwAR02_BhotlEStQiuoqmYZpDFf34Grnpd1JlIQ-IOnKP0jyzXagyBdel6B2Q'> 13th Floor, Oct 2019 </Link></text>
                        </div>
                    </Box>
                    <Box sx = {{backgroundColor: 'white',  height: '100%', border: 2, borderColor: 'pink', marginBottom: '20px', padding: '20px'}}>

                        {/*Fearsome Engine*/}
                        <text className='mySubHeader'>Upcoming</text>
                        <div style={{margin: '20px'}}>

                        <Grid container spacing={2}>
                            <Grid item md = {3} xs = {0}></Grid>
                            <Grid item md = {6} xs = {12}>
                                <img
                                    src={fearsomeFront}
                                    alt={"image"}
                                    loading="lazy"
                                    style = {{width: '100%'}}
                                />
                                <text className='myText' style = {{fontSize: '50%'}} >draft album artwork</text>
                            </Grid>
                            <Grid item md = {3} xs = {0}></Grid>
                            <Grid item md ={12}>
                                <div style={{textAlign: 'left', marginTop: '20px', marginBottom: '20px'}}>
                                    {fearsomeBlurb}
                                </div>
                            </Grid>

                            <Grid item md = {6} xs = {12}>
                                <img
                                    src={frontVinyl}
                                    alt={"image"}
                                    loading="lazy"
                                    style = {{width: '100%'}}
                                />
                                <text className='myText' style = {{fontSize: '50%'}} >vinyl mockup</text>
                            </Grid>
                            <Grid item md = {6} xs = {12}>
                                <img
                                    src={backVinyl}
                                    alt={"image"}
                                    loading="lazy"
                                    style = {{width: '100%'}}
                                />
                            </Grid>

                            <Grid item md ={12}>
                                <div style={{textAlign: 'left', marginTop: '20px', marginBottom: '20px'}}>
                                    <div style={{marginBottom: '16px'}}><text><b>The Great Filter </b>{greatFilter}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>Fearsome Engine </b>{fearsomeEngine}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>Cloud Seeder </b>{cloudSeeder}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>Katamari Damashi: </b>{katamari}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>The Spyre </b>{spyre}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>Ripship is Online </b>{online}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>Moore's Law </b>{moores}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>Insufficient Data </b>{insufficient}</text></div>
                                    <div style={{marginBottom: '16px'}}><text><b>B13 </b>{b13}</text></div>
                                </div>
                            </Grid>
                            <Grid item md = {12}>
                                <img
                                    src={gatefold}
                                    alt={"image"}
                                    loading="lazy"
                                    style = {{width: '100%'}}
                                />
                            </Grid>

                        </Grid>
                        </div>
                    </Box>
                    <Box sx = {{backgroundColor: 'white',  height: '100%', border: 2, borderColor: 'hotPink', marginBottom: '20px', padding: '20px'}}>

                        {/*Video*/}
                        <text className='mySubHeader'>Video</text>

                        <div style={{alignContent: 'center', textAlign: 'center', alignItems: 'center', marginBottom: '20px', marginTop: '20px'}}>
                            <div style = {{height: (width*.8)*0.56, width: (width*.8), marginLeft: 'auto', marginRight: 'auto', display: 'block'}}>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UUMGH_MAY88"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{display: 'block'}}>
                                </iframe>
                            </div>
                        </div>
                    </Box>

                    <Box sx = {{backgroundColor: 'white',  height: '100%', border: 2, borderColor: 'darkkhaki', marginBottom: '20px', padding: '20px'}}>
                        {/*Links*/}
                        <text className='mySubHeader'>Links</text>
                        <div style={{padding:'20px'}}>
                            <text style={{marginBottom: '10px', overflow: 'hidden', textOverflow: 'ellipsis'}} className='myText' >Spotify: <Link target={'_blank'} href={spotifyPath}>{spotifyPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Bandcamp: <Link target={'_blank'} href={bandcampPath}>{bandcampPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Instagram: <Link target={'_blank'} href={instagramPath}>{instagramPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Facebook: <Link target={'_blank'} href={facebookPath}>{facebookPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Website: <Link target={'_blank'} href='https://ripship.online'>https://ripship.online</Link>  </text>
                        </div>
                    </Box>
                    <Gallery></Gallery>
                    <DownloadButton></DownloadButton>
                    <div style={{marginBottom: '20px'}}></div>
                </div>
            </div>
        </div>

    );
}



export default PressKit;