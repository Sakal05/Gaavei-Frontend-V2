import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TrendingCard from "./TrendingCard";
import { Typography } from "@mui/material";

const TrendingContentMock = [
  {
    image:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kror Mom Srok Na by Norith x Vannda",
    description:
      "Testasdfsa dfsdfsdfsdfasdfasd fasdfasdfsdfasdfasdfcx cbdcbsdasdfasdfsadfasdfs dfsdfsadfsadfasdfsadfasdf",
    tokenId: "1",
    available: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Serenity",
    description:
      "A collection of soothing melodies to calm your mind and uplift your spirit.",
    tokenId: "2",
    available: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1629923759854-156b88c433aa?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Echoes of Autumn",
    description:
      "Experience the beauty of fall through enchanting compositions inspired by the changing seasons.",
    tokenId: "3",
    available: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1629923759854-156b88c433aa?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Celestial Symphony",
    description:
      "Embark on a celestial journey through a symphony of cosmic sounds and ethereal melodies.",
    tokenId: "4",
    available: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1601066525716-3cca33c6d4c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Whispers in the Wind",
    description:
      "Let the gentle whispers of the wind carry you away to distant lands and tranquil landscapes.",
    tokenId: "5",
    available: true,
  },
];

export default function Trending() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Trending
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 4, sm: 4, md: 4 }}
        justifyContent="center" // Aligns items horizontally to the center
        alignItems="flex-start" // Aligns items vertically to the center
      >
        {TrendingContentMock.map((info, index) => (
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TrendingCard
              image={info.image}
              title={info.title}
              description={info.description}
              tokenId={info.tokenId}
              available={info.available}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
