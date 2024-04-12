import {
  Avatar,
  Box,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { IOwnCollection } from "../interface/IOwnCollection";

export default function CollectorCard({
  tokenId,
  image,
  author,
  title,
}: IOwnCollection) {
  return (
    <Box
      sx={{
        maxWidth: "200px",
        width: "100%", // Set width to fit 3 articles on one screen
        flexShrink: 0, // Ensure no shrinking when container is resized
        border: "none",
        borderRadius: "12px",
        position: "relative",
        marginRight: "10px",
      }}
    >
      <CardActionArea
        sx={{ position: "relative", width: "100%", height: "250px"}}
      >
        <CardMedia
          component="img"
          image={image}
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
            paddingY: "20px",
            borderRadius: "12px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            width="80%"
            display="flex"
            flexDirection={"column"}
            paddingTop="40px"
          >
            <Typography variant="subtitle2" textAlign={"left"}>
              {author}
            </Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center" // Align items vertically at the center
              width="100%"
              flexDirection="row"
            >
              <Typography variant="h4" textAlign="left">
                {title}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
}
