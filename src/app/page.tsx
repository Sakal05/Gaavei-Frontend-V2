import Sponsor from "@/components/Sponsor";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Learn from "@/components/Learn";
import { NEWRELEASEDATA } from "@/DummyData/NewReleaseData";
import { ArticleData } from "@/DummyData/ArticleData";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";

const Trending = dynamic(() => import("@/components/Trending"), {
  ssr: false,
  loading: () => <Loading />,
});

const Release = dynamic(() => import("@/components/ReleaseComponent"), {
  ssr: false,
  loading: () => <Loading />,
});

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
      <Grid
        container
        rowSpacing={3}
        paddingX={'5%'}
        sx={{
          // width: "90%",
          // padding: '5%',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
          <Learn contents={ArticleData} />
        </Grid>
      </Grid>
    </Box>
  );
}
