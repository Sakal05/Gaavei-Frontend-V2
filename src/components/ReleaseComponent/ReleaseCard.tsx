import Card from "@mui/material/Card";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import grey from "@mui/material/colors/grey";

export interface IReleaseCard {
  image: string;
  title: string;
  description: string;
  tier: string;
  tokenId: string;
  available: boolean;
  price: string | null;
  author: string;
}

export default function ReleaseCard({
  image,
  title,
  author,
  description,
  tier,
  tokenId,
  available,
  price,
}: IReleaseCard) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        border: "none",
        boxShadow: "none",
        borderRadius: "12px",
      }}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <CardContent sx={{ padding: "2px" }}>
          <Grid
            container
            sx={{
              margin: "auto",
              padding: "5px",
              width: "100%",
              // height: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Align items to the center vertically
              justifyContent: "center", // Align items to the center horizontally
            }}
          >
            {/* Adjusted CardMedia */}
            <Grid
              item
              xs={3}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: "150px", // Set width to maintain square aspect ratio
                  height: "100px",
                  borderRadius: "12px", // Add border radius
                  objectFit: "cover",
                }}
                image={image}
                alt={title}
              />
            </Grid>
            {/* Text Fields */}
            <Grid
              item
              xs={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                width: "100%", // Set width to maintain square
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 10px", // Add padding for better spacing
              }}
            >
              <Typography
                noWrap
                variant="subtitle1"
                sx={{
                  // paddingBottom: "1px",
                  width: "100%",
                  fontWeight: "semibold",
                  fontSize: "18px",
                }}
              >
                {title}
              </Typography>
              <Typography
                component="span"
                sx={{
                  display: "inline", // Ensure tier and price are displayed inline
                  fontWeight: "500", // Make price bold
                  fontSize: "0.875rem",
                  paddingBottom: "5px",
                }}
              >
                {author}
              </Typography>
              <Typography
                noWrap
                variant="subtitle2"
                sx={{
                  width: "100%", // Set width to maintain square
                }}
              >
                {tier}
              </Typography>
            </Grid>
            {/* View More Button */}
            <Grid
              item
              xs={3}
              md={3}
              lg={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Typography variant="h6">
                {price ? price : "Comming Soon..."}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
