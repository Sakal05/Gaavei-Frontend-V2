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
import { useState } from 'react';

export default function ConfirmationModal({isOpen}: {isOpen: boolean}) {
  // State to manage the modal's open state
  const [open, setOpen] = useState(isOpen);

  // Function to handle opening and closing the modal
  const handlePopUp = () => {
    setOpen(!open);
  };

  return (
    <Modal
      open={open}
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
        kdmv er
      </Box>
    </Modal>
  )
}
