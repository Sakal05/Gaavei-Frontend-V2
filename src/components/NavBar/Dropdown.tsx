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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const userInfo = {
  fullname: "Sakal Samanng",
  address: "0x1234567890987654321",
};

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="Remy Sharp"
              src="https://plus.unsplash.com/premium_photo-1687609112015-23bcdb2385f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
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
        <MenuItem onClick={handleClose} sx={{ color: "primary.dark" }}>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item>
              <Avatar
                alt="Remy Sharp"
                src="https://plus.unsplash.com/premium_photo-1687609112015-23bcdb2385f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Grid>

            <Grid item sx={{ maxWidth: "80%", overflowWrap: "break-word" }}>
              {/* <Typography variant="subtitle1">{userInfo.fullname}</Typography> */}
              <Typography variant="subtitle1">
                {`${userInfo.address.slice(0, 6)}...${userInfo.address.slice(
                  -5
                )}`}
              </Typography>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ display: "block" }}>
          <Typography variant="subtitle1">0.00 ETH</Typography>
          <Typography variant="subtitle2">Wallet Balance</Typography>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon
              fontSize="medium"
              sx={{ color: "primary.dark" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AutoGraphOutlinedIcon
              fontSize="medium"
              sx={{ color: "primary.dark" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1">Earning</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SettingsOutlinedIcon
              fontSize="medium"
              sx={{ color: "primary.dark" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1">Setting</Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogoutOutlinedIcon
              fontSize="medium"
              sx={{ color: "primary.dark" }}
            />
          </ListItemIcon>
          <Typography variant="subtitle1">Logout</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
