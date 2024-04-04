"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../../theme";
import Dropdown from './Dropdown';

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {

  return (
    <AppBar position="static" sx={{ bgcolor: theme.palette.primary.light, boxShadow: 'none'}}>
      <Container sx={{ width: "70%"}}>
        <Toolbar disableGutters  sx={{ display: 'flex', justifyContent: 'space-between',  boxShadow: 'none'}}>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            GAAVEI.
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Dropdown/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
