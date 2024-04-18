import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

export interface ISponsorCard {
  title: string;
  image: string;
  author: string;
  available: boolean;
}

const HeaderCard = ({ title, image, author, available }: ISponsorCard) => {
  return (
    <Card sx={{ border: "none" }} square={true}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 5,
            // borderRadius: "12px",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.4) 20%, rgba(15,15,15,0.2) 70%, rgba(0,0,0,0.5032606792717087) 80%)",
          }}
        />
        <CardMedia
          sx={{
            height: "250px",
            opacity: "0.8",
            zIndex: "-10",
            border: "none",
          }}
          component="img"
          image={image}
          title="Pancakes"
          alt="Pancakes"
        />
        <Box
          sx={{
            height: "100%",
            position: "absolute",
            top: { xs: "65%", sm: "70%", md: "70%", lg: "70%" },
            left: { xs: "45%", sm: "45%", md: "50%", lg: "50%" },
            transform: "translateY(-50%)",
            zIndex: 10, // Ensure buttons are above slider
          }}
        >
          <Grid
            container
            rowSpacing={2}
            direction="column"
            sx={{ color: "primary.light" }}
          >
            <Grid item xs={12} sm={12} lg={12}>
              <Chip
                label="Single"
                sx={{
                  height: "20px",
                  fontWeight: "600",
                  color: "transparency",
                  borderRadius: "15px",
                  backgroundColor: "primary.light",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <Typography
                // gutterBottom
                variant="h3"
                component="div"
                fontWeight="medium"
                sx={{
                  padding: "0",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                Vannda x Vanthan
              </Typography>
              <Typography
                gutterBottom
                component="div"
                variant="h1"
                fontWeight="bold"
                sx={{
                  padding: "0",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                }}
              >
                Point of No Return
              </Typography>
            </Grid>
          </Grid>
          <Chip
            label={
              <Typography variant="h5" fontWeight="regular">
                Comming Soon...
              </Typography>
            }
            sx={{
              height: "20px",
              color: "primary.light",
              borderRadius: "8px",
              border: "0.5px solid #ffffff",
              backgroundColor: "transparency",
            }}
          />
        </Box>
      </div>
    </Card>
  );
};

export default HeaderCard;
