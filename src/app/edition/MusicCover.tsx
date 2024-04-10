"use client";
import { Box, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { styled } from "@mui/system";

interface IMusicCover {
  image: string;
  title: string;
  author: string;
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export default function MusicCover({ image, title, author }: IMusicCover) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <CardMedia
        style={{ height: "400px", paddingTop: "65px" }}
        component="img"
        image={image}
        title="Pancakes"
        alt="Pancakes"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          position: "absolute",
          color: "primary.light",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", }}>
            <StyledIconButton aria-label="Go back" sx={{ color: "primary.light", fontSize: '2rem' }}>
            <ArrowBackIcon fontSize='inherit'/>
            </StyledIconButton>
            <StyledIconButton aria-label="Share" sx={{ color: "primary.light", fontSize: '3rem' }}>
            <ShareIcon fontSize='inherit'/>
            </StyledIconButton>

        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ flexGrow: 1, padding: "0 10px" }}
          zIndex={10}
          color="primary.light"
        >
          <Grid
            item
            container
            xs={12}
            md={6}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <img
              src={image}
              alt="Music cover"
              style={{
                maxWidth: "100%",
                height: "auto",
                width: "100px",
                borderRadius: "8px",
              }}
            />
            <Grid
              item
              xs={12}
              md={6}
              container
              direction="column"
              justifyContent="center"
            >
              <Grid item sx={{ textAlign: "center", marginBottom: "5px" }}>
                <Typography variant="h2">{title}</Typography>
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <Typography variant="h4">{author}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center">
            <StyledIconButton aria-label="Play" sx={{ color: "primary.light", fontSize: '5rem' }}>
              <PlayCircleIcon fontSize='inherit' />
            </StyledIconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
