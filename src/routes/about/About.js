import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import "../../index.css"
import {Grid, Box} from '@mui/material';
import valhalla from '../../resources/images/valhalla.JPG'
import Bio from '../../components/bio'

function About() {

    const { height, width } = useWindowDimensions();
    const bio = Bio();

    // div {
    //     white-space: pre-wrap;
    // }

    return(
        <div>
            <CustomBar></CustomBar>
            <div className = 'myStyle'>
                <text className='myHeader'>About</text>
                <div style = {{marginTop: '20px', marginBottom: '20px', whiteSpace: 'pre-wrap'}}>
                <Grid container spacing={2}>
                    <Grid item md = {6} xs = {12}>
                        <Box sx = {{backgroundColor: 'yellow',  height: '100%', border: 1, borderColor: 'red'}}>
                        <text className='myText' style = {{padding: '4%'}}>{bio}
                        </text>
                        </Box>
                    </Grid>
                    <Grid item md = {6} xs = {12}>
                        <img
                            src={valhalla}
                            alt={"image"}
                            loading="lazy"
                            style = {{width: '100%'}}
                        />
                        <text className='myText' style = {{fontSize: '50%'}} >photo by Logan McAllister</text>
                    </Grid>
                </Grid>
                </div>
            </div>
        </div>

    );
}

export default About;