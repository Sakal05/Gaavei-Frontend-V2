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
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { styled } from "@mui/system";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export interface IMusicCover {
  image: string;
  title: string;
  type: string;
  author: string;
}

export interface MusicCoverProps extends IMusicCover {
  setMusicPlay: React.Dispatch<React.SetStateAction<boolean>>;
  musicPlayed: boolean;
}

export default function MusicCover({
  image,
  title,
  type,
  author,
  setMusicPlay,
  musicPlayed
}: MusicCoverProps) {

  const handleMusicPlay = () => {
    setMusicPlay(!musicPlayed);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "65px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundImage: `url(${image})`,
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
          zIndex={10}
          color="primary.light"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={image}
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
              justifyContent="center"
              sx={{ paddingLeft: "20px" }}
            >
              <Grid item sx={{ textAlign: "left", marginBottom: "5px" }}>
                <Chip
                  label={type}
                  sx={{
                    height: "20px",
                    fontWeight: "600",
                    color: "transparency",
                    borderRadius: "15px",
                    backgroundColor: "primary.light",
                  }}
                />
              </Grid>
              <Grid item sx={{ textAlign: "left", marginBottom: "5px" }}>
                <Typography variant="h2">{title}</Typography>
              </Grid>
              <Grid item sx={{ textAlign: "left" }}>
                <Typography variant="h4">{author}</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box justifyContent="center" alignItems="center">
            <StyledIconButton
              aria-label="Play"
              sx={{ color: "primary.light", fontSize: "5rem" }}
              onClick={() => handleMusicPlay()}
            >
              <PlayCircleIcon fontSize="inherit" />
            </StyledIconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
