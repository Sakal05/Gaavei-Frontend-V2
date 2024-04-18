"use client";
import Card from "@mui/material/Card";
import { CardActionArea, CardContent } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { NoSsr } from "@mui/base/NoSsr";
import ReleaseLoading from "../Loading/Release";
import { useRouter } from "next/navigation";
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
  tokenId,
  author,
  tier,
  price,
}: IReleaseCard) {
  const router = useRouter();

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
          onClick={() => {
            router.push(`/edition/${tokenId}`);
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
                xs={5}
                sm={5}
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
                  fontWeight="bold"
                  color="primary.main"
                  sx={{
                    width: "100%",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  component="span"
                  variant="h5"
                  fontWeight="regular"
                  sx={{
                    display: "inline",
                    paddingBottom: "5px",
                  }}
                >
                  {author}
                </Typography>
                <Typography
                  noWrap
                  variant="h5"
                  fontWeight="medium"
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
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  textAlign="right"
                  color="primary.dark"
                  sx={{
                    width: "100%", // Set width to maintain square
                  }}
                  noWrap
                >
                  {"  "}
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
