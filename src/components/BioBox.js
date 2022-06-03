import React, { useState } from 'react';
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Box, Tab} from "@mui/material";
import Bio from "./bio";

function handleChange(){
    return(null);
}

export const shortBio = "Ripship are a sci-fi psych-rock duo hailing from Tāmaki Makaurau. The prolific performers shake venues with heavy riffs, off-kilter beats and deep synth loops. Science fiction and technological anxiety influence both the timbre and subject matter of Ripship’s songs, with vocoded lyrics touching on AI uprising, interstellar travel and the heat death of the universe."
export const mediumBio = "Ripship are a sci-fi psych-rock duo hailing from Tāmaki Makaurau. The prolific performers shake venues with heavy riffs, off-kilter beats and deep synth loops. Science fiction and technological anxiety influence both the timbre and subject matter of Ripship’s songs, with vocoded lyrics touching on AI uprising, interstellar travel and the heat death of the universe.\n" +
    "\n" +
    "Callum Lincoln (guitar, synth, vocals) and Eva-Rae McLean (drums, vocals) met at a gig in 2018, but would have crossed paths many times in the Tamaki all-ages scene circa 2015-2016. Ripship's live performances are well-reviewed, with audiences and critics noting the surprisingly massive sound for a two-piece. \n"
export const longBio = "Ripship are a sci-fi psych-rock duo hailing from Tāmaki Makaurau. The prolific performers shake venues with heavy riffs, off-kilter beats and deep synth loops. Science fiction and technological anxiety influence both the timbre and subject matter of Ripship’s songs, with vocoded lyrics touching on AI uprising, interstellar travel and the heat death of the universe.\n" +
    "\n" +
    "Callum Lincoln (guitar, synth, vocals) and Eva-Rae McLean (drums, vocals) met at a gig in 2018, but would have crossed paths many times in the Tamaki all-ages scene circa 2015-2016. The band's first gig was in 2019, and they concluded the year with their first festival performance at Whammyfest 2019.\n" +
    "\n" +
    "The duo's first release Greebles is a six-track EP, accompanied by a music video for Lube the Cube. Their first single, Man After Man, landed in the 95bFM top 10 for seven consecutive weeks, with most of the remaining tracks also claiming spots after the EP's release in May 2020. Reviews of the EP praised the variety of genres and the unique timbres achieved with a lo-fi setup.\n" +
    "\n" +
    "Ripship's live performances are well-reviewed, with audiences and critics noting the surprisingly massive sound for a two-piece. \n"


function BioBox(){

    const [value, setValue] = React.useState('2');


    function handleChange(event, newValue) {
        setValue(newValue);
    };

    return(

        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered={true}
                             TabIndicatorProps={{
                                 style: { background: "CornflowerBlue"}
                             }}>
                        <Tab label="Short Bio" value="1" style={{color: 'black'}} />
                        <Tab label="Medium Bio" value="2" style={{color: 'black'}} />
                        <Tab label="Long Bio" value="3" style={{color: 'black'}} />
                    </TabList>
                </Box>
                <TabPanel value="1" style={{textAlign: 'left'}}>{shortBio}</TabPanel>
                <TabPanel value="2" style={{textAlign: 'left'}}>{mediumBio}</TabPanel>
                <TabPanel value="3" style={{textAlign: 'left'}}>{longBio}</TabPanel>
            </TabContext>
        </div>

    );

}

export default BioBox;