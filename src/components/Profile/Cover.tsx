"use client";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import { styled } from "@mui/system";
import { useRouter } from "next/navigation";
import { IProfileCover } from "../interface/IProfile";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { config } from "@/wagmiconfig";
import { formatUnits } from "viem";
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export default function Cover({ address, role }: IProfileCover) {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundImage: `url("https://i.seadn.io/s/raw/files/08471b7441ff6d16905d6ab643e6f3b4.png?auto=format&dpr=1&w=136&h=136&fr=1")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        overflow: "hidden", // Ensure gradient doesn't overflow
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "linear-gradient(to left, rgba(0, 0, 0, 0.4), transparent), linear-gradient(to right, rgba(0, 0, 0, 0.4), transparent)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          py: "15px",
          position: "absolute",
          color: "primary.light",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            // margin: 'auto',
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StyledIconButton
            aria-label="Go back"
            sx={{ color: "primary.light", fontSize: "2rem" }}
            onClick={() => router.back()}
          >
            <ArrowBackIcon fontSize="inherit" />
          </StyledIconButton>
          <StyledIconButton
            aria-label="Share"
            sx={{ color: "primary.light", fontSize: "2rem" }}
          >
            <ShareIcon fontSize="inherit" />
          </StyledIconButton>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          // zIndex={10}
          color="primary.light"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "auto",
            }}
          >
            <img
              src={
                "https://i.seadn.io/s/raw/files/08471b7441ff6d16905d6ab643e6f3b4.png?auto=format&dpr=1&w=136&h=136&fr=1"
              }
              alt="Music cover"
              style={{
                maxWidth: "100%",
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <Grid
              container
              direction="column"
              rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
              alignItems="flex-start"
              justifyContent="center"
              sx={{ paddingLeft: "20px", height: "100%", width: "100%" }}
            >
              <Grid item sx={{ textAlign: "left" }}>
                <Chip
                  label={role}
                  sx={{
                    height: "20px",
                    fontWeight: "600",
                    color: "transparency",
                    borderRadius: "15px",
                    backgroundColor: "primary.light",
                  }}
                />
              </Grid>
              <Grid item sx={{ textAlign: "left", minWidth: 0 }}>
                <Typography
                  variant="h2"
                  noWrap={false}
                  sx={{ width: "100%", textAlign: "left", minWidth: 0 }}
                >
                  {address.slice(0, 15)}...
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
