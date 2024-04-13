import {
  Box,
  Button,
  Typography,
  Modal,
  Grid,
  CardMedia,
  IconButton,
  ButtonGroup,
  CardActionArea,
} from "@mui/material";
import { useState } from "react";
import ICheckout from "../interface/ICheckout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ConfirmationModal from "./Confirmation";

export default function Checkout({
  image,
  author,
  title,
  price,
  isCheckOut,
  setCheckOut,
}: ICheckout) {
  const [quantity, setQuantity] = useState<number>(1);
  const [proceed, setProceed] = useState<boolean>(false);

  const handlePopUp = () => {
    setCheckOut(!isCheckOut);
  };
  const handleConfirm = () => {
    setProceed(!proceed);
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalAmount = () => {
    const totalPrice = parseFloat(price) * quantity;
    return totalPrice.toFixed(4);
  };

  return (
    <>
      <Modal
        open={isCheckOut}
        onClose={handlePopUp}
        aria-labelledby="Top-Collector"
        aria-describedby="Most collections of all times"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%", // Adjust modal width as needed
            maxWidth: "500px", // Set max width for modal content
            maxHeight: "80%", // Set max height for modal content
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: "12px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: "15px",
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                objectFit: "cover",
                overflow: "hidden",
                flexShrink: 0,
                borderRadius: 4,
                backgroundColor: "rgba(0,0,0,0.08)",
              }}
            >
              <CardMedia
                image={image}
                sx={{
                  width: "100%",
                  height: "100%", // Adjusted height to fill the container
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                px: "10px",
                margin: "auto",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="body1" textAlign="left">
                {author}
              </Typography>
              <Typography variant="body1">{title}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" fontWeight="medium">
              Quantity
            </Typography>
            <ButtonGroup
              aria-label="Quantity Selection"
              sx={{ height: "30px" }}
            >
              <Button
                variant="outlined"
                onClick={() => handleDecrease()}
                sx={{ width: "5px", color: "primary.main" }}
              >
                <RemoveIcon />
              </Button>
              <Button variant="outlined">
                <Typography variant="body1" sx={{ color: "primary.main" }}>
                  {quantity}
                </Typography>
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleIncrement()}
                sx={{ width: "5px" }}
              >
                <AddIcon sx={{ color: "primary.main" }} />
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Typography variant="h4" fontWeight="medium">
              Total Price
            </Typography>
            <Typography variant="h4" color="primary.main">
              {calculateTotalAmount()} BNB
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: "15px",
            }}
          >
            <Button
              sx={{
                border: "0.4px solid",
                borderColor: "primary.main",
                color: "primary.dark",
                borderRadius: 2,
                // paddingX: '20px',
                width: "100%",
              }}
              onClick={() => {
                setCheckOut(!isCheckOut); // Toggle the isCheckOut state
                setProceed(true); // Set proceed to true if isCheckOut is true
              }}
            >
              <Typography variant="button" sx={{ p: 0, color: "primary.main" }}>
                BUY NOW
              </Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
      {proceed == true && (
        <Modal
          open={proceed}
          onClose={handleConfirm}
          aria-labelledby="Top-Collector"
          aria-describedby="Most collections of all times"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%", // Adjust modal width as needed
              maxWidth: "500px", // Set max width for modal content
              maxHeight: "80%", // Set max height for modal content
              overflow: "auto",
              bgcolor: "background.paper",
              borderRadius: "12px",
              boxShadow: 24,
              p: 4,
            }}
          >
            Are you sure about that?
          </Box>
        </Modal>
      )}
    </>
  );
}
