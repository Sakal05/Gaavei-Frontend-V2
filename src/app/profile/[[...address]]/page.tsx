"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  Skeleton,
  Stack,
} from "@mui/material";
import { DataSet } from "@/DummyData/PortfolioData";
import Collection from "@/components/Portfolio/Collection";
import { OwnCollectionData } from "@/DummyData/OwnCollectionData";
import Cover from "@/components/Profile/Cover";
import { COLLECTOR_DATA } from "@/DummyData/CollectorData";
import {
  useAccount,
  useBalance,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import { config } from "@/wagmiconfig";
import { formatUnits } from "viem";
import { useEffect, useState } from "react";

interface Props {
  address: string;
}

export default function Profile({ params }: { params: Props }) {
  console.log(params.address[0]);
  const profileAddress = params.address[0];
  // const findByAddress = COLLECTOR_DATA[profileAddress];
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  const [collectorData, setCollectorData] = useState<any>(null);

  const balance = useBalance({
    address,
    config,
  });
  const isCurrentUser = undefined === profileAddress;

  useEffect(() => {
    function findCollectorByAddress(addressToFind: string) {
      return COLLECTOR_DATA.find(
        (collector) => collector.address === addressToFind
      );
    }

    const foundCollector = findCollectorByAddress(profileAddress);
    if (!foundCollector) {
      setCollectorData({
        address: address,
        ensName: ensName,
        ensAvatar: ensAvatar,
        balance: balance,
      });
    } else {
      setCollectorData(foundCollector);
    }
    console.log("P: ", foundCollector);
  }, []);

  if (!isConnected || collectorData === null) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "65px",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            // marginTop: "20px",
            // height: "100%",
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            // gap: "2px",
          }}
        >
          <Skeleton animation="wave" width="100%" height="150px" />
          <Skeleton variant="circular" width={80} height={80} />
          <Skeleton animation="wave" width="100%" height="50px" />
          <Skeleton animation="wave" height="150px" />
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto", // Adjusted to center the content
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "65px",
      }}
    >
      <Cover address={`${collectorData.address}`} role={"Artist"} />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "20px",
          height: "100%",
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-start",
            margin: "auto",
            gap: "15px",
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Tokens
            </Typography>
            <Typography variant="h4" fontWeight="light">
              120
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Tokens
            </Typography>
            <Typography variant="h4" fontWeight="light">
              120
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ color: "primary.main", textAlign: "left" }}
        >
          {isCurrentUser ? "MY" : "THEIR"} COLLECTIONS
        </Typography>
        <Collection contents={OwnCollectionData} />
      </Container>
    </Box>
  );
}
