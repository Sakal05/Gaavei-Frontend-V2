import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import theme from "../../theme";
import { grey } from "@mui/material/colors";

interface ITrendingCard {
  image: string;
  title: string;
  description: string;
  tokenId: string;
  available: boolean;
}

function TrendingCard({
  image,
  title,
  description,
  tokenId,
  available,
}: ITrendingCard) {
  return (
    <Card
      sx={{
        width: "100%",
        border: "none",
        boxShadow: "none",
        borderRadius: "12px",
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{
            height: 200, // Adjust the image height as needed
            objectFit: "cover", // Maintain the aspect ratio of the image
            marginBottom: "10px",
          }}
          image={image}
          title={title}
        />
        <CardContent>
          <Grid container sx={{ margin: "auto", width: "100%" }}>
            <Grid
              item
              xs={8}
              sm={8}
              lg={8}
              sx={{
                display: "flex",
                witdth: "100%",
              }}
            >
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{ paddingBottom: "10px" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={4}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "flex-end", // Align content to the right
                alignItems: "flex-start", // Align content to the top
                height: "100%", // Make sure the grid item takes full height
              }}
            >
              <Chip
                label={available ? "ON SALE" : "COMMING..."}
                sx={{
                  height: "20px",
                  fontWeight: "500",
                  backgroundColor: available ? "#d5f4e2" : "#ffe0e0",
                  color: available ? "#2ECC71" : "#FF0000",
                  borderRadius: "15px",
                }}
                color={"success"}
              />
            </Grid>
          </Grid>

          <Typography variant="subtitle2" noWrap>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {available ? (
          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Typography variant="h6" noWrap>
              Airdrop
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: "200px",
                borderRadius: 3,
              }}
            >
              <Typography variant="button">BUY NOW</Typography>
            </Button>
          </Box>
        ) : (
          <Button
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: 3,
              bgcolor: grey[300],
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
              },
            }}
            disableElevation // Disable elevation effect
            disableRipple // Disable ripple effect
          >
            <Typography variant="button">Comming Soon</Typography>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default TrendingCard;
