import CustomBar from '../../components/CustomBar';
import useWindowDimensions from '../../components/windowDimensions';
import {Grid, Box} from '@mui/material';
import octopus from '../../resources/images/octopus.jpeg'
import winecellar from '../../resources/images/winecellar.jpg'

import "../../index.css"

function Releases() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
            <CustomBar></CustomBar>
            <div className='myStyle'>
                <text className='myHeader'>Releases</text>
                <div style = {{marginTop: '20px', marginBottom: '20px'}}>
                <Grid container spacing={2}>
                    <Grid item md = {1} xs = {0}></Grid>
                    <Grid item md = {5} xs = {12}>
                        <Box sx = {{ height: '100%'}}>
                            <iframe align= "center" style={{border: 0, width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2720797344/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/" seamless>
                                <a href="https://ripship.bandcamp.com/album/greebles-ep">Greebles EP by Ripship</a>
                            </iframe>
                        </Box>
                    </Grid>

                    <Grid item md = {5} xs = {12}>
                        <Box sx = {{ height: '100%'}}>
                            <iframe align= "center" style={{border: 0, width: "350px", height: "350px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2476545815/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1664687402/transparent=true/" seamless>
                                <a href="https://fieldofdreamsnz.bandcamp.com/album/field-of-dreams-2">Field of Dreams 2 by Ripship</a>
                            </iframe>
                        </Box>
                    </Grid>

                    <Grid item md = {1} xs = {0}></Grid>

                    <Grid item md = {12} xs = {12}>
                        <Box sx = {{ height: '100%'}}>
                        <iframe align= "center" width={(width*0.7) + "px"} height={(width*0.7*0.6) + "px"} src="https://www.youtube.com/embed/UUMGH_MAY88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Box>
                    </Grid>

                    {/* <Grid item md = {4} xs = {12} sx = {{display: "flex", justifyContent: "left", alignItems: "left"}}>
                    <img
                        src={winecellar}
                        alt={"image"}
                        loading="lazy"
                        style = {{height: "350px", alignSelf: 'left'}}
                    />
                    </Grid> */}

                </Grid>
            </div>
            </div>
        </div>

    );
}

export default Releases;