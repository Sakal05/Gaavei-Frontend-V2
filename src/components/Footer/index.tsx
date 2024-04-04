import { Box, Container, Grid, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Box width={"100%"}>
      <Divider sx={{ paddingTop: "70px" }} />
      <Container
        sx={{ width: "90%", paddingTop: "50px", paddingBottom: "30px" }}
      >
        <Grid
          container
          rowSpacing={5}
          columnSpacing={10}
          sx={{ margin: "auto", width: "100%", alignItems: "flex-start" }}
        >
          <Grid item sm={12} md={3} lg={3} sx={{ width: "100%" }}>
            <Typography
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              GAAVEI.
            </Typography>
          </Grid>
          <Grid
            item
            container
            sm={12}
            md={3}
            lg={3}
            rowSpacing={2}
            direction="column"
            width="100%"
          >
            <Grid item>
              <Typography variant="body1">Help center</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Support</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={12}
            md={3}
            lg={3}
            rowSpacing={2}
            direction="column"
            width="100%"
          >
            <Grid item>
              <Typography variant="body1">Blog</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Twitter</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Facebook</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Tiktok</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Instagram</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Discord</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={12}
            md={3}
            lg={3}
            rowSpacing={2}
            direction="column"
            width="100%"
          >
            <Grid item>
              <Typography variant="body1">Jobs</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Privacy</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Term of service</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Associated Risks</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
