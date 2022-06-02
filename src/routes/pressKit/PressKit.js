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

import {instagramPath, bandcampPath, facebookPath, spotifyPath} from "../home/Home";
import * as React from "react";

function PressKit() {

    const { height, width } = useWindowDimensions();
    const review = Feb21Review();
    const review2= May22Review();
    const review3 = Oct19Review();
    const dropBoxPath = "https://www.dropbox.com/s/n0bezw7ghxarr7h/Ripship_EPK.zip?dl=0"

    // div {
    //     white-space: pre-wrap;
    // }

    return(
        <div>
            <CustomBar></CustomBar>
            <div className = 'myStyle'>
                <text className='myHeader'>Electronic Press Kit</text>
                <div style={{width: "200px", margin: 'auto', marginTop: '20px'}}>
                    <LinkButton path = {dropBoxPath} primary = "yellow" secondary = "blue" label = "Download EPK"/>
                </div>
                <div style = {{marginTop: '20px', marginBottom: '20px', whiteSpace: 'pre-wrap'}}>
                    <Box sx = {{backgroundColor: 'white',  height: '100%', border: 2, borderColor: 'red', marginBottom: '20px', padding: '20px'}}>
                        <text className='mySubHeader'>Bio</text>
                        <BioBox></BioBox>
                        <div style={{height:'10px'}}></div>
                        <text className='mySubHeader'>Reviews</text>
                        <div style={{padding: "20px"}}>
                            <text className='myText' style={{fontStyle: 'italic'}}>"{review2}" - <Link target={'_blank'} href='https://www.muzic.net.nz/articles/reviews/93399/daniel-armstrong-the-monsoons-gig-review-daniel-armstrong-the-monsoons-the-tuning-fork-auckland-27052022?fbclid=IwAR1oVEkqk2gRC2JFhjtJAlzu-ycyQjyCUzRh50sNEV-L4ifBPQ7Eb5I9sIY'> Muzic.net, May 2022 </Link></text>
                            <div style={{height: '20px'}}></div>
                            <text className='myText' style={{fontStyle: 'italic'}}>"{review}" - <Link target={'_blank'} href='https://www.13thfloor.co.nz/concert-review-dartz-whammy-bar-auckland-13-february-2021/?fbclid=IwAR0_8Q-G7F_Znm25WYbulSISgdBmnGTQALWeFedOFzPX8gHIode-IJgyWc4'> 13th Floor, Feb 2021</Link></text>
                            <div style={{height: '20px'}}></div>
                            <text className='myText' style={{fontStyle: 'italic'}}>"{review3}" - <Link target={'_blank'} href='https://www.13thfloor.co.nz/concert-review-whammyfest-2019-night-one-whammy-bar-october-25-2019/?fbclid=IwAR02_BhotlEStQiuoqmYZpDFf34Grnpd1JlIQ-IOnKP0jyzXagyBdel6B2Q'> 13th Floor, Oct 2019 </Link></text>
                        </div>
                        <div style={{height:'20px'}}></div>

                        <text className='mySubHeader'>Links</text>
                        <div style={{padding:'20px'}}>
                            <text style={{marginBottom: '10px', overflow: 'hidden', textOverflow: 'ellipsis'}} className='myText' >Spotify: <Link target={'_blank'} href={spotifyPath}>{spotifyPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Bandcamp: <Link target={'_blank'} href={bandcampPath}>{bandcampPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Instagram: <Link target={'_blank'} href={instagramPath}>{instagramPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Facebook: <Link target={'_blank'} href={facebookPath}>{facebookPath}</Link> </text>
                            <text style={{marginBottom: '10px'}} className='myText' >Website: <Link target={'_blank'} href='https://ripship.online'>https://ripship.online</Link>  </text>
                        </div>
                        <text className='mySubHeader'>Video</text>
                        <div style={{height:'20px'}}></div>

                        <div style={{alignContent: 'center', textAlign: 'center', alignItems: 'center'}}>
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
                    <Gallery></Gallery>
                </div>
            </div>
        </div>

    );
}



export default PressKit;