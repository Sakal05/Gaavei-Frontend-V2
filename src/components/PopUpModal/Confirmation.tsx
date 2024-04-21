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
  Container,
  Skeleton,
} from "@mui/material";
import confirmation from "../../assets/confirmation.svg";
import Image from "next/image";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { ADDRESS, ABI } from "@/app/constants/contractInfo";
import connectContract from "@/utils/connectContract";
interface IConfirmation {
  tokenId: string;
  amount: number;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";

export default function ConfirmationModal({
  tokenId,
  amount,
  isOpen,
  setOpen,
}: IConfirmation) {
  const { address, isConnected } = useAccount();

  const result = useReadContract({
    abi: ABI.STAKING,
    address: ADDRESS.STAKING as `0x${string}`,
    functionName: "nftToken",
    account: address,
  });

  const {
    data: hash,
    isPending,
    isError,
    isSuccess,
    error,
    writeContract,
  } = useWriteContract();

  const handleStake = async () => {
    // writeContract({
    //   abi: ABI.STAKING,
    //   address: ADDRESS.STAKING as `0x${string}`,
    //   functionName: "stakeNFT",
    //   args: [BigInt(0), BigInt(1)],
    // });
    const { Contract: nftContract } = await connectContract(
      ADDRESS.COLLECTION,
      ABI.COLLECTION
    );

    if (!nftContract) return;
    const approval = await nftContract.isApprovedForAll(
      address,
      ADDRESS.STAKING
    );
    if (!approval) {
      console.log("has not approved");
      try {
        const approve = await nftContract.setApprovalForAll(
          ADDRESS.STAKING,
          true
        );
        await approve.wait();
      } catch (e) {
        console.log(e);
      }
    }
    const { Contract } = await connectContract(ADDRESS.STAKING, ABI.STAKING);

    if (!Contract) return;
    try {
      const stake = await Contract.stakeNFT("0", amount);
      await stake.wait();
      toast.success("Staking successful!");
    } catch (e: any) {
      toast.error(`Execution Reverted`);
      console.log(e);
    }
  };

  // if (isPending) {
  //   toast.loading("Staking in process...", {
  //     autoClose: 2000,
  //   });
  // }
  // if (isSuccess) {
  //   toast.success("Staking successfully completed");
  //   console.log("data: ", hash);
  // }
  // if (isError) {
  //   toast.error("Error");
  //   console.log("Error: ", error);
  // }

  if (!isConnected) {
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

  // setOpen(false);
  // if (result.isSuccess) {
  //   console.log("NFT Token query: ", result.data);
  //   toast.success("🦄 Wow so easy!", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Bounce,
  //   });
  // }

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
            gap: "20px",
            alignItems: "center",
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
              gap: "10px",
            }}
          >
            <Typography variant="h3">Confirmation</Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
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
                gap: "20px",
              }}
            >
              <Button>
                <Typography variant="button" color="red">
                  Cancel
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleStake()}
              >
                <Typography
                  variant="button"
                  color="primary.light"
                  textAlign="right"
                >
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
