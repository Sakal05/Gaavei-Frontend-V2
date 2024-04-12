import {
  Avatar,
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

export interface ICollector {
  rank: number;
  address: string;
  collection_token: number;
  image_url: string;
}

export default function HorizontalCard({
  rank,
  address,
  collection_token,
  image_url,
}: ICollector) {
  return (
    <Box
      sx={{
        width: "100%",
        flexShrink: 0, // Ensure no shrinking when container is resized
        border: "none",
        alignItems: "center",
        borderRadius: "12px",
        paddingY: "10px",
      }}
    >
      <CardActionArea sx={{ width: "100%" }}>
        <Grid
          container
          direction="row"
          columnSpacing={5}
          width="100%"
          margin="auto"
          justifyContent='space-between'
          alignItems="center"
        >
          <Grid item xs={6} sm={6} md={7} lg={7} display='flex'>
            <Avatar src={image_url} sx={{ width: 50, height: 50 }} />
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center" // Align items vertically at the center
              width="100%"
              flexDirection="row"
            >
              <Typography variant="h4" noWrap textAlign="left" pl='15px'>
                {address.slice(0, 20)}...
              </Typography>
              <VerifiedIcon sx={{ color: "#4182FA" }} />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={3} lg={3}>
            <Typography variant="h4" textAlign={"center"}>
              {collection_token}
            </Typography>
          </Grid>
          <Grid
            item
            sm={3}
            md={2}
            lg={2}
            display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }}
            sx={{ alignItems: "left" }}
          >
            <Typography variant="h4" textAlign={"center"}>
              #{rank}
            </Typography>
          </Grid>
        </Grid>

      </CardActionArea>
    </Box>
  );
}
