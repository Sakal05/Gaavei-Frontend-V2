import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

const SponsorCard = () => {
  return (
    <Box
      component="img"
      sx={{
        width: '100%',
        height: '200px',
        objectFit: 'cover', // Ensures the image covers the entire container
        marginBottom: '20px',
      }}
      alt="The house from the offer."
      src="https://images.unsplash.com/photo-1587731556938-38755b4803a6?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
};

export default SponsorCard;
