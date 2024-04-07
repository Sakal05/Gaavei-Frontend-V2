"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../../theme";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { Grid } from "@mui/material";
import { usePathname } from 'next/navigation'


const pages = [
  { name: "Discover", route: "/" },
  { name: "Portfolio", route: "/portfolio" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {

  // const router = useRouter();
  const pathname = usePathname()
  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: theme.palette.primary.light }}
    >
      <Container sx={{ height: '100%'}}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // boxShadow: "none",
            height: "100%",
          }}
        >
          <Grid
            direction="row"
            columnSpacing={{ sx: 2, sm: 3, mdg: 3, lg: 5 }}
            container
            sx={{
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Grid item>
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
            </Grid>
            {pages.map((page) => (
              <Grid item key={page.name}>
                <Link href={page.route}>
                  <Typography
                    variant="h4"
                    sx={{
                      display: { xs: "none", md: 'flex', lg: 'flex'},
                      textDecoration:
                      pathname === page.route ? "underline" : "none",
                      fontWeight: pathname === page.route ? "600" : "400",
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ flexGrow: 0 }}>
            <Dropdown />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
