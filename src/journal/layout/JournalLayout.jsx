import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: "flex" }} className="animate__animated animate__fadeIn anime__faster">
        <NavBar drawerWidth={drawerWidth}/>

       <SideBar drawerWidth={drawerWidth}/>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar/>
          {children}
        </Box>
    </Box>
  );
};
