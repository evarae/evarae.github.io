import valhalla from '../resources/images/valhalla.JPG'
import winecellar from '../resources/images/winecellar.jpg'
import trippy from '../resources/images/trippy.JPG'
import couchDark from '../resources/images/couchDark.jpeg'
import couchLight from '../resources/images/couchLight.JPG'
import spaceRae from '../resources/images/space2.jpg'
import spaceCallum from '../resources/images/space1.jpg'
import kroad from '../resources/images/kroad.JPG'
import {Grid} from "@mui/material";


function Gallery(){
    return(
        <div>
            <Grid container spacing={2}>

                <Grid item md = {6} xs = {12}>
                    <img
                        src={valhalla}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                    <text className='myText' style = {{fontSize: '50%'}} >photo by Logan McAllister</text>
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <img
                        src={kroad}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <img
                        src={couchDark}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <img
                        src={couchLight}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <img
                        src={spaceCallum}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                    <text className='myText' style = {{fontSize: '50%'}} >photo by the Mousai</text>
                </Grid>
                <Grid item md = {6} xs = {12}>
                    <img
                        src={winecellar}
                        alt={"image"}
                        loading="lazy"
                        style = {{width: '100%'}}
                    />
                    <text className='myText' style = {{fontSize: '50%'}} >photo by Ren Hodge</text>
                </Grid>

            </Grid>
        </div>
    );

}

export default Gallery;