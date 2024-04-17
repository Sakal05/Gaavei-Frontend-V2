import { http, createConfig } from "wagmi";
import { sepolia, morphSepolia } from "wagmi/chains";
import '@rainbow-me/rainbowkit/styles.css';
import { injected, metaMask } from "wagmi/connectors";
import {
  getDefaultWallets,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

const { wallets } = getDefaultWallets();

export const config = getDefaultConfig({
  appName: "GAAVIE APP",
  projectId: "0b4078b6aa243a1248f987b26b2d8ba9",
  chains: [
    sepolia,
    morphSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  // connectors: [
  //   metaMask(),
  // ],
  transports: {
    [sepolia.id]: http(),
    [morphSepolia.id]: http(),
  },
  ssr: true,
});
