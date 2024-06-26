"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import { useRouter } from "next/navigation";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { config } from "@/wagmiconfig";
import { formatUnits } from "viem";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const balance = useBalance({
    address,
    config,
  });

  if (!isConnected) {
    return null;
  }

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Tooltip title="Account Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {ensAvatar ? (
              <Avatar alt="Remy Sharp" src={ensAvatar} />
            ) : (
              <Avatar alt="Remy Sharp" src="R" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            borderRadius: "15px",
            width: "220px",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: theme.palette.primary.light,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => router.push("/profile")}
          sx={{ color: "primary.dark", py: 0 }}
        >
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item>
              {ensAvatar ? (
                <Avatar alt="Remy Sharp" src={ensAvatar} />
              ) : (
                <Avatar alt="Remy Sharp" src="R" />
              )}
            </Grid>

            <Grid item sx={{ maxWidth: "80%", overflowWrap: "break-word" }}>
              {/* <Typography variant="subtitle1">{userInfo.fullname}</Typography> */}
              {address && (
                <Typography variant="subtitle1" noWrap>
                  {ensName ? `${ensName} (${address})` : `${address}`}
                </Typography>
              )}
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{ display: "block" }}
          onClick={() => {
            router.push("/profile");
          }}
        >
          <Typography variant="subtitle1">
            {balance?.data?.value
              ? `${formatUnits(
                  balance.data!.value,
                  balance.data!.decimals
                ).slice(0, 5)}`
              : "0.00"}{" "}
            ETH
          </Typography>
          <Typography variant="subtitle2">Wallet Balance</Typography>
        </MenuItem>

        <Divider />
        <MenuItem
          sx={{
            py: 0,
          }}
          onClick={() => {
            router.push("/profile");
          }}
        >
          <ListItemIcon>
            <AccountCircleOutlinedIcon
              fontSize="medium"
              sx={{ color: "primary.dark" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1">Profile</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            py: 0,
          }}
          onClick={() => {
            router.push("/portfolio");
          }}
        >
          <ListItemIcon>
            <AutoGraphOutlinedIcon
              fontSize="medium"
              sx={{ color: "primary.dark" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1">Earning</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          sx={{
            py: 0,
          }}
          onClick={() => disconnect()}
        >
          <ListItemIcon>
            <LogoutOutlinedIcon
              fontSize="medium"
              sx={{ color: "error.main" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1" color="error.main">
            Disconnect
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
