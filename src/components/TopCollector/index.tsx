"use client";

import CollectorCard from "./CollectorCard";
import { Box, Button, Typography, Modal, Grid } from "@mui/material";
import { ICollector } from "./CollectorCard";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import HorizontalCard from "./HorizontalCard";
export default function Collector({ contents }: { contents: ICollector[] }) {
  const [open, setOpen] = useState(false);

  const handlePopUp = () => {
    setOpen(!open);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        width: "100%",
        margin: "auto",
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        color="primary.main"
        sx={{ width: "100%", textAlign: "left", marginBottom: "20px" }}
      >
        Top Collector
      </Typography>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: "flex",
          flexDirection: "row",
          flexShrink: 0,
          alignItems: "flex-start",
          marginBottom: "20px",
          // justifyContent: "center", // Align items horizontally at the center
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {contents.slice(0, 8).map((data, index) => (
          <CollectorCard
            key={index}
            address={data.address}
            collection_token={data.collection_token}
            image_url={data.image_url}
          />
        ))}
      </Box>
      <Button
        onClick={() => handlePopUp()}
        sx={{ marginButtom: "15px", borderRadius: "12px" }}
      >
        <Typography
          variant="button"
          color="blue"
          sx={{
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            paddingX: "10px",
          }}
        >
          View more
        </Typography>
      </Button>
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
            maxWidth: "700px", // Set max width for modal content
            maxHeight: "80%", // Set max height for modal content
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: "12px",
            boxShadow: 24,
            p: "24px",
            scrollbarWidth: "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              m: "auto",
              pb: "12px",
              // pt: "20px",
            }}
          >
            <Typography variant="h3" width="100%">
              Collector List
            </Typography>
            <Button
              onClick={handlePopUp}
              sx={{
                borderRadius: "50px",
                justifyContent: "flex-end",
                minWidth: 0,
              }}
            >
              <CloseIcon />
            </Button>
          </Box>
          <Grid
            container
            direction="row"
            columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 3 }}
            alignItems="center"
            color="grey"
            // pb="12px"
          >
            <Grid item xs={7} sm={6} md={7} lg={7}>
              <Typography
                variant="h4"
                noWrap
                textAlign="left"
                // pl="35px"
                fontWeight="light"
              >
                Name
              </Typography>
            </Grid>
            <Grid item xs={5} sm={3} md={3} lg={3}>
              <Typography variant="h4" textAlign={"center"} fontWeight="light">
                Token Counts
              </Typography>
            </Grid>
            <Grid
              item
              display={{ xs: "none", sm: "block", md: "block", lg: "block" }}
              sm={3}
              md={2}
              lg={2}
            >
              <Typography variant="h4" textAlign={"center"} fontWeight={"300"}>
                Rank
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center", // Align items horizontally at the center
              "&::-webkit-scrollbar": {
                display: "none",
                // paddingLeft: '20px',
                // opacity: 0.5,
              },
              scrollbarWidth: "0px",
              // scrollbarColor: "grey",
            }}
          >
            {contents.map((data, index) => (
              <HorizontalCard
                key={index}
                rank={(index += 1)}
                address={data.address}
                collection_token={data.collection_token}
                image_url={data.image_url}
              />
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
