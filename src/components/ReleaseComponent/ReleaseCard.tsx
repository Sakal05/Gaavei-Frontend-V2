import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { NoSsr } from "@mui/base/NoSsr";
import ReleaseLoading from "../Loading/Release";

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
  tier,
  price,
}: IReleaseCard) {
  return (
    <NoSsr fallback={<ReleaseLoading />}>
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
              columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
              sx={{
                margin: "auto",
                width: "100%",
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
                }}
              >
                <Typography
                  noWrap
                  variant="h4"
                  sx={{
                    // paddingBottom: "1px",
                    width: "100%",
                    // fontWeight: "semibold",
                    // fontSize: "18px",
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
                <Typography variant="h4">
                  {price ? price : "Available soon"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </NoSsr>
  );
}
