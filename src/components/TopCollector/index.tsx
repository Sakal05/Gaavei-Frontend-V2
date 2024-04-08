import CollectorCard from "./CollectorCard";
import { Box, Typography } from "@mui/material";
import { ICollector } from "./CollectorCard";

export default function Collector({ contents }: { contents: ICollector[] }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        margin: "auto",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        Top Collector
      </Typography>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          overflowX: "auto", // Enable horizontal scrolling
          display: "flex",
          flexDirection: "row",
          flexShrink: 0,
          alignItems: "flex-start", // Align items to the top
          "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar for webkit browsers
          },
          scrollbarWidth: "none", // Hide the scrollbar for Firefox
        }}
      >
        {contents.map((data, index) => (
          <CollectorCard
            address={data.address}
            collection_token={data.collection_token}
            image_url={data.image_url}
          />
        ))}
      </Box>
    </Box>
  );
}
