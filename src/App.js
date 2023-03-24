import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "@wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import Connect from "./components/Connect";
import Header from "./components/Header";
import Body from "./components/Body";

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({
      apiKey: ALCHEMY_API_KEY,
    }),
    publicProvider(),
  ]
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "621d088bc380637f0674bdf0bfda589d",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  provider,
});

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="">
        <Connect />
        <Header />
        <Body />
      </div>
    </WagmiConfig>
  );
}

export default App;
