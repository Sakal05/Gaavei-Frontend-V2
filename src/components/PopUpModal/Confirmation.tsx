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
import confirmation from "../../assets/confirmation.svg";
import Image from "next/image";

interface IConfirmation {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmationModal({ isOpen, setOpen }: IConfirmation) {
  return (
    <Modal
      open={isOpen}
      onClose={() => setOpen(false)}
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
          p: 3,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: "30%" }}>
            <Image alt="" src={confirmation} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              gap: "10px"
            }}
          >
            <Typography variant="h3">Confirmation</Typography>
            <Typography variant="body1" sx={{opacity: 0.7}}>
              Are you sure you want to proceed? You can undo this action.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                margin: "auto",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: '20px',
              }}
            >
              <Button>
                <Typography variant="button" color="red">
                  Cancel
                </Typography>
              </Button>
              <Button variant="contained" color='success' onClick={() => {setOpen(false)}}>
                <Typography variant='button' color='primary.light' textAlign="right" >
                  Confirm
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
