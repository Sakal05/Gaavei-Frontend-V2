import { Button } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
// import '@rainbow-me/rainbowkit/dist/index.css';

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
                  <Button
                    sx={{
                      width: "100%",
                      color: "primary.dark",
                      borderRadius: "12px",
                      px: '12px',
                    }}
                    onClick={openConnectModal}
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    sx={{
                      width: "100%",
                      color: "primary.dark",
                      borderRadius: "12px",
                      px: '12px',
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
                    px: '12px',
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
