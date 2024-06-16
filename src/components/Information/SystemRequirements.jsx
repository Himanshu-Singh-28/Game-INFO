import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React, { useState } from 'react';
import './informationpage.css';


const SystemRequirements = ({window,mac,lunix,requirements}) => {
    const[val,setVal]=useState("1");
    const handleChange=(e,val)=>{
        setVal(val);
    }
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={val}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "white",
              width: "70%",
              marginLeft: "20px",
            }}
          >
            <TabList onChange={handleChange}>
              <Tab label="Windows" value="1" disabled={!window} />
              <Tab label="Mac_Os" value="2" disabled={!mac} />
              <Tab label="Lunix" value="3" disabled={!lunix} />
            </TabList>
          </Box>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "white",
              width: "70%",
              marginLeft: "20px",
            }}
          >
            <TabPanel value="1">
              <div
                dangerouslySetInnerHTML={{ __html: requirements[0].minimum }}
                className="minimum-req"
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: requirements[0].recommended,
                }}
                className="minimum-req"
              ></div>
            </TabPanel>
            <TabPanel value="2">
              <div
                dangerouslySetInnerHTML={{ __html: requirements[1].minimum }}
                className="minimum-req"
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: requirements[1].recommended,
                }}
                className="minimum-req"
              ></div>
            </TabPanel>
            <TabPanel value="3">
              <div
                dangerouslySetInnerHTML={{ __html: requirements[2].minimum }}
                className="minimum-req"
              ></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: requirements[2].recommended,
                }}
                className="minimum-req"
              ></div>
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
}

export default SystemRequirements