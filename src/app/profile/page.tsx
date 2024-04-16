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
import Cover from "@/components/Profile/Cover";

export default function Profile() {
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
      <Cover
        address={"0x123123123"}
        role={"Artist"}
        tokens={"100"}
        balance={"0.05 BNB"}
        collections={null}
      />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "20px",
          height: "100%",
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: '24px',
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-start",
            margin: "auto",
            gap: "15px",
          }}
        >
          <Box>
            <Typography variant="h4">Tokens</Typography>
            <Typography variant="body1">120</Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h4">Tokens</Typography>
            <Typography variant="body1">120</Typography>
          </Box>
        </Box>
        <Typography
          variant="h3"
          sx={{ color: "primary.main", textAlign: 'left' }}
        >
          MY COLLECTIONS
        </Typography>
        <Collection contents={OwnCollectionData} />
      </Container>
    </Box>
  );
}
