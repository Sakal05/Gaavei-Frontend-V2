import Card from "@mui/material/Card";
import { Skeleton } from "@mui/material";
import { Box, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

export default function ReleaseCardSkeleton() {
  return (
    <Card sx={{ display: "flex", width: "100%", border: "none", boxShadow: "none", borderRadius: "12px" }}>
      <CardActionArea sx={{ width: "100%", height: "100%" }}>
        <CardContent sx={{ padding: "2px" }}>
          <Grid container sx={{ margin: "auto", padding: "5px", width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            {/* Adjusted CardMedia */}
            <Grid item xs={3} md={3} lg={3} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Skeleton variant="rectangular" sx={{ width: "150px", height: "100px", borderRadius: "12px" }} />
            </Grid>
            {/* Text Fields */}
            <Grid item xs={6} md={6} lg={6} sx={{ display: "flex", width: "100%", flexDirection: "column", alignItems: "flex-start", padding: "0 10px" }}>
              <Skeleton variant="text" sx={{ width: "100%", fontWeight: "semibold", fontSize: "18px" }} />
              <Skeleton variant="text" sx={{ display: "inline", fontWeight: "500", fontSize: "0.875rem", paddingBottom: "5px" }} />
              <Skeleton variant="text" sx={{ width: "100%" }} />
            </Grid>
            {/* View More Button */}
            <Grid item xs={3} md={3} lg={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
              <Skeleton variant="text" sx={{ width: "100%" }} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
