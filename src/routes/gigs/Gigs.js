import useWindowDimensions from '../../components/windowDimensions';
import CustomBar from '../../components/CustomBar';
import "../../index.css"
import {Grid, Box} from '@mui/material';
import { bandcampPath, spotifyPath, facebookPath, instagramPath } from '../home/Home';
import octopus from '../../resources/images/octopus.jpeg'

const email = "ripshipband@gmail.com";

function Gigs() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
        <CustomBar></CustomBar>
        <div className = 'myStyle'>
            <text className='myHeader'>Gigs</text>
            <div style = {{marginTop: '20px', marginBottom: '20px'}}>
            </div>


        </div>
        <iframe>
            <a href="https://www.songkick.com/artists/3799121" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-background-color="transparent" data-locale="en">Brett Eldredge tour dates</a>
            <script src="//widget.songkick.com/3799121/widget.js"></script>
        </iframe>
        </div>
    );
}

export default Gigs;