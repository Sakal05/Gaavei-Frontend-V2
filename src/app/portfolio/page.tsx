import Header from "@/components/Portfolio/Header";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { DataSet } from "@/DummyData/PortfolioData";
import Collection from "@/components/Portfolio/Collection";
import { OwnCollectionData } from "@/DummyData/OwnCollectionData";

export default function Portfolio() {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto", // Adjusted to center the content
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "65px",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "20px",
          height: "100%",
          width: "100%",
        }}
      >
        <Header balance={"7.79"} growthRate={"7.75"} data={DataSet} />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ marginBottom: "25px", color: "primary.main" }}
        >
          MY COLLECTIONS
        </Typography>
        <Collection contents={OwnCollectionData} />
      </Container>
    </Box>
  );
}
