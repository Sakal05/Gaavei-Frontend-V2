import {
  Avatar,
  Box,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

export interface ICollector {
  address: string;
  collection_token: number;
  image_url: string;
}

export default function CollectorCard({
  address,
  collection_token,
  image_url,
}: ICollector) {
  return (
    <Box
      sx={{
        maxWidth: "200px",
        width: "100%", // Set width to fit 3 articles on one screen
        flexShrink: 0, // Ensure no shrinking when container is resized
        border: "none",
        borderRadius: "12px",
        position: "relative",
        paddingX: "10px",
      }}
    >
      <CardActionArea sx={{ position: "relative", height: "250px" }}>
        <CardMedia
          component="img"
          image={image_url}
          alt="NFT"
          sx={{
            borderRadius: "12px",
            // filter: "blur(20px)",
            objectFit: "fit",
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            borderRadius: "12px",
            overflow: "hidden",
            opacity: 0.9,
            filter: "blur(12)",
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.908000700280112) 28%, rgba(0,0,0,0.28895308123249297) 100%)",
          }}
        />
        <Box
          sx={{
            color: "primary.light",
            zIndex: 2,
            textAlign: "center",
            paddingY: "30px",
            borderRadius: "12px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        >
          <Avatar src={image_url} sx={{ width: 120, height: 120 }} />
          <Box
            width="80%"
            display="flex"
            flexDirection={"column"}
            paddingTop="40px"
          >
            <Typography variant="subtitle2" textAlign={"left"}>
              Collect {collection_token} tokens
            </Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center" // Align items vertically at the center
              width="100%"
              flexDirection="row"
            >
              <Typography variant="h4" textAlign="left">
                {address.slice(0, 10)}...
              </Typography>
              <VerifiedIcon sx={{ color: "#4182FA" }} />
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
}
