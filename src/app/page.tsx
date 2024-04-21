import Sponsor from "@/components/Sponsor";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Learn from "@/components/Learn";
import { NEWRELEASEDATA } from "@/DummyData/NewReleaseData";
import { ArticleData } from "@/DummyData/ArticleData";
import { COLLECTOR_DATA } from "@/DummyData/CollectorData";
import Collector from "@/components/TopCollector";
import Portfolio from "@/components/Portfolio";
import Release from "@/components/ReleaseComponent";
import Trending from "@/components/Trending";
import { Container } from "@mui/material";
import GetData from "@/utils/GetData";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto", // Adjusted to center the content
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sponsor />
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing={4}
          // paddingX={'5%'}
          paddingTop="40px"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Grid item xs={12} sm={12} lg={12}>
            <Portfolio
              balance={"0.005"}
              growthRate={"30"}
              data={[1, 60, 2, 5, 100, 4, 30]}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Trending contents={NEWRELEASEDATA} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Release releaseTitle="New Release" content={NEWRELEASEDATA} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Release releaseTitle="Local Release" content={NEWRELEASEDATA} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Collector contents={COLLECTOR_DATA} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Learn contents={ArticleData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
