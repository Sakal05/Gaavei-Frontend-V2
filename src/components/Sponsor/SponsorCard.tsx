import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

const SponsorCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        margin: "0",
      }}
    >
      <Card>
        <div style={{ position: "relative" }}>
          <CardMedia
            sx={{ height: "200px", opacity: "0.8" }}
            component="img"
            image={
              "https://images.unsplash.com/photo-1587731556938-38755b4803a6?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title="Pancakes"
            alt="Pancakes"
          />
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateY(-50%)",
              zIndex: 10, // Ensure buttons are above slider
              color: "primary.light",
            }}
          >
            <Grid container direction="column">
              <Grid item>
              <Chip
                label="Comming Soon..."
                sx={{
                  height: "20px",
                  fontWeight: "500",
                  // backgroundColor: available ? "#d5f4e2" : "#ffe0e0",
                  // color: available ? "#2ECC71" : "#FF0000",
                  borderRadius: "15px",
                }}
                color={"success"}
              />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Card>
    </Box>
  );
};

export default SponsorCard;
