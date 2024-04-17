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
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const config = getDefaultConfig({
  appName: "GAAVIE APP",
  projectId: projectId ? projectId : '',
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
