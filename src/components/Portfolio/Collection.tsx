import { Box, Grid, Typography } from "@mui/material";
import CollectionCard from "./CollectionCard";
import { IOwnCollection } from "../interface/IOwnCollection";

export default function Collection({
  contents,
}: {
  contents: IOwnCollection[];
}) {
  return (
    <Box
      sx={{
        width: "100%",
        //   overflowX: "auto",
        display: "flex",
        flexDirection: "row",
        flexShrink: 0,
        alignItems: "center",
        marginBottom: "20px",
        // justifyContent: "center", // Align items horizontally at the center
      }}
    >
      <Grid
        container
        direction="row"
        sx={{
          alignItems: "center",
          width: "100%",
        }}
        rowSpacing={{ xs: 2, sm: 2, md: 3, lg: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
      >
        {contents.map((data, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{ width: "100%" }}
          >
            <CollectionCard
              key={index}
              tokenId={data.tokenId}
              image={data.image}
              title={data.title}
              author={data.author}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
