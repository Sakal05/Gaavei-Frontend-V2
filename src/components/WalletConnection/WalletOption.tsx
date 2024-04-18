import { Box, Button, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      sx={{
                        // width: "100%",
                        borderColor: "primary.main",
                        borderWidth: "0.8px",
                        borderStyle: "solid",
                        borderRadius: "8px",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        // px: "12px",
                        // display: "inline-block", // Adjusted display property
                      }}
                      onClick={openConnectModal}
                    >
                      <Typography variant="h6">Connect Wallet</Typography>
                    </Button>
                  </Box>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    sx={{
                      width: "100%",
                      color: "primary.dark",
                      borderRadius: "12px",
                      px: "12px",
                    }}
                    onClick={openChainModal}
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <Button
                  sx={{
                    width: "100%",
                    color: "primary.dark",
                    borderRadius: "12px",
                    px: "12px",
                  }}
                  onClick={openAccountModal}
                >
                  {account.displayName}
                  {account.displayBalance ? ` (${account.displayBalance})` : ""}
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomConnectButton;
