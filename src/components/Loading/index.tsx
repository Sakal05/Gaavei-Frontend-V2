import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <Box
    >
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
    </Box>
  );
}
