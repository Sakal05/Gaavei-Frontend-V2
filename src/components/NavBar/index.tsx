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
import { Button, Grid, Modal } from "@mui/material";
import { usePathname } from "next/navigation";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import { Connector, useConnect } from "wagmi";
import CustomConnectButton from "../WalletConnection/WalletOption";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const pages = [
  { name: "Discover", route: "/" },
  { name: "Portfolio", route: "/portfolio" },
];

function ResponsiveAppBar() {
  const pathname = usePathname();
  const { connectors, connect } = useConnect();
  const connector = connectors[0];
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const [connectionOpen, setConnectionOpen] = React.useState(false);

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
              width: "100%",
              flexDirection: "row",
              marign: "auto",
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
                    variant="h3"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", sm: "flex", md: "flex" },
                      fontWeight: "bold",
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
                      variant="h5"
                      sx={{
                        display: {
                          xs: "none",
                          sm: "flex",
                          md: "flex",
                          lg: "flex",
                          fontSize: "16px",
                        },
                        textDecoration:
                          pathname === page.route ? "underline" : "none",
                        fontWeight: pathname === page.route ? "bold" : "light",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                flexGrow: 0,
                width: "30%",
                margin: "auto",
                justifyContent: "flex-end",
              }}
            >
              {isConnected ? <Dropdown /> : <CustomConnectButton />}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
