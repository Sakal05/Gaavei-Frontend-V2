import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Skeleton,
} from "@mui/material";

export default function TrendingCardSkeleton() {
    return (
        <Box
          sx={{
            width: "100%",
            border: "none",
            borderRadius: "12px",
            padding: "20px",
            // position: "relative",
          }}
        >
          <CardActionArea>
            <Box
              sx={{
                height: 200, // Adjust the image height as needed
                marginBottom: "10px",
                position: "relative",
                borderRadius: "12px",
                alignItems: "center",
              }}
            >
              <Skeleton
                variant="rectangular"
                sx={{ height: 200, borderRadius: "12px" }}
              />
              <Box
                sx={{
                  color: "primary.light",
                  zIndex: 22,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  paddingX: "30px",
                  paddingY: "20px",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "50%", marginBottom: "10px" }}
                />
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", marginBottom: "10px" }}
                />
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
              <Skeleton
                variant="rectangular"
                sx={{ width: "50px", height: "24px", marginRight: "10px" }}
              />
              <Skeleton
                variant="circular"
                sx={{ width: "24px", height: "24px" }}
              />
            </Box>
            <Button
              sx={{
                border: "0.6px solid",
                borderColor: "primary.dark",
                color: "primary.dark",
                borderRadius: 3,
                paddingX: "2em",
              }}
              disabled
            >
              <Typography variant="button">BUY</Typography>
            </Button>
          </CardActions>
        </Box>
    )
}