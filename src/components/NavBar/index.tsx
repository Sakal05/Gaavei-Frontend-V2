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
import { usePathname } from "next/navigation";

import CssBaseline from "@mui/material/CssBaseline";

const pages = [
  { name: "Discover", route: "/" },
  { name: "Portfolio", route: "/portfolio" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        // component="nav"
        sx={{
          bgcolor: theme.palette.primary.light,
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ minHeight: "64px" }}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // boxShadow: "none",
              height: "100%",
            }}
          >
            <Grid
              direction="row"
              columnSpacing={{ sx: 3, sm: 3, mdg: 3, lg: 5 }}
              container
              sx={{
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Link href="/">
                  <Typography
                    variant="h6"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", sm: "flex", md: "flex" },
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                    }}
                  >
                    GAAVEI.
                  </Typography>
                </Link>
              </Grid>
              {pages.map((page) => (
                <Grid item key={page.name}>
                  <Link href={page.route}>
                    <Typography
                      variant="h4"
                      sx={{
                        display: {
                          xs: "none",
                          sm: "flex",
                          md: "flex",
                          lg: "flex",
                        },
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
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
