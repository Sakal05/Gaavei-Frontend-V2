import { Box, Container, Grid, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Box
      width={"100%"}
      minHeight={{ xs: "820px", md: "auto", sm: "auto", lg: "auto" }}
    >
      <Divider sx={{ marginTop: "70px" }} />
      <Container
        sx={{
          width: "100%",
          paddingBottom: "30px",
        }}
      >
        <Grid
          container
          display={{ xs: "block", sm: "block", md: "flex", lg: "flex" }}
          direction="row"
          rowSpacing={5}
          columnSpacing={2}
          sx={{
            margin: "auto",
            width: "100%",
            height: "100%",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} sm={12} md={3} lg={3} sx={{ width: "100%" }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
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
            xs={12}
            sm={4}
            md={3}
            lg={3}
            rowSpacing={2}
            direction="column"
            width="100%"
          >
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Help center
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Support
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            md={3}
            lg={3}
            rowSpacing={2}
            direction="column"
            width="100%"
          >
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Blog
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Twitter
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Facebook
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Tiktok
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Instagram
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Discord
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            md={3}
            lg={3}
            rowSpacing={2}
            direction="column"
            width="100%"
          >
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Jobs
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Privacy
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Term of service
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight="light">
                Associated Risks
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
