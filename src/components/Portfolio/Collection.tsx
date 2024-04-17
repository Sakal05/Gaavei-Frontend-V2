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
        alignItems: "flex-start",
        marginBottom: "20px",
        // justifyContent: "center", // Align items horizontally at the center
      }}
    >
      <Grid container direction='row' rowSpacing={{ xs:2, sm: 2, md: 3, lg: 3 }} columnSpacing={{ xs: 2, sm: 2, md: 3, lg: 3}}>
        {contents.map((data, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={2} sx={{ width: '100%'}}>
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
