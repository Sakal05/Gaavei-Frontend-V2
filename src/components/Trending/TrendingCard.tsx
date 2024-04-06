import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Chip from "@mui/material/Chip";
import { grey } from "@mui/material/colors";
import { ICard } from "@/app/interface/ICard";
// import Image from "next/image";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

function TrendingCard({
  image,
  title,
  author,
  type,
  description,
  tokenId,
  available,
  tier,
  price,
}: ICard) {
  return (
    <Box
      sx={{
        width: "100%",
        border: "none",
        borderRadius: "12px",
        position: "relative",
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            height: 200, // Adjust the image height as needed
            objectFit: "cover", // Maintain the aspect ratio of the image
            marginBottom: "10px",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 0,
            borderRadius: "12px",
            alignItems: "center",
            "&::before": {
              content: "''",
              position: "absolute",
              borderRadius: "12px",
              top: 0,
              left: 0,
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))", // Gradient from black to transparent
              opacity: 0.8, // Adjust the opacity as needed
              zIndex: 1,
            },
          }}
        >
          <CardMedia
            sx={{ height: 200, objectFit: "cover", borderRadius: "12px" }}
            image={image}
            title={title}
          />
          {/* <Image fill src={image} alt={title} style={{ objectFit: "cover", borderRadius: "12px", }} /> */}

          <Box
            sx={{
              color: "primary.light",
              zIndex: 22,
              position: "absolute",
              bottom: 0,
              left: 0,
              // width: "40%",
              paddingX: "30px",
              paddingY: "20px",
            }}
          >
            <Chip
              label={type}
              sx={{
                fontWeight: "500",
                fontSize: "16px",
                color: "primary.light",
                borderRadius: "12px",
                backgroundColor: "transparency",
                backdropFilter: "blur(20px)",
                marginBottom: "15px",
              }}
            />
            <Typography
              variant="h2"
              component="div"
              sx={{ paddingBottom: "5px" }}
            >
              {title}
            </Typography>
            <Typography variant="h6" noWrap>
              {author}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center" // Center align both price and icon horizontally
        >
          <Typography variant="h6" noWrap>
            {price ? price : "Comming Soon..."}
          </Typography>
          {price && (
            <EmojiEventsIcon
            fontSize="large"
              sx={{
                color:
                  tier === "GOLD"
                    ? "gold"
                    : tier === "SILVER"
                    ? "silver"
                    : tier === "BROWN"
                    ? "#cd7f32" // bronze color
                    : "inherit", // default color
                paddingLeft: "2px",
                // verticalAlign: '',
                // height: "100%",
              }}
            />
          )}
        </Box>
        <Button
          // variant="outlined"
          sx={{
            border: "0.6px solid",
            borderColor: 'primary.dark',
            color: 'primary.dark',
            borderRadius: 3,
            paddingX: "2em",
          }}
        >
          <Typography variant="button" >BUY</Typography>
        </Button>
      </CardActions>
    </Box>
  );
}

export default TrendingCard;
