import CustomBar from '../../components/CustomBar';
import useWindowDimensions from '../../components/windowDimensions';
import {Grid} from '@mui/material';

import "../../index.css"

function Releases() {

    const { height, width } = useWindowDimensions();

    return(
        <div>
            <CustomBar></CustomBar>
            <div className='myStyle'>
                <p>Releases page</p>
                <Grid>

                    
                </Grid>
            </div>
        </div>

    );
}

export default Releases;