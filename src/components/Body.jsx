import "../index.css";
import ReactDOM from "react-dom";
import Card from "./Card";
import { contractAddress } from "../Contract";
import { contractAbi } from "../Contract";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Spin, message, notification } from "antd";
import {
  // usePrepareSendTransaction,
  // useSendTransaction,
  useSigner,
  useContract,
} from "wagmi";
import { FormatTypes } from "ethers/lib/utils.js";
import { Interface } from "ethers/lib/utils.js";

const Body = () => {
  // Converts human readable abi to a json abi
  const iface = new Interface(contractAbi);
  const contractAbiJson = iface.format(FormatTypes.json);

  //-------------------------------State Variables-------------------------------//
  // State Variables: Antd Messages
  const [messageApi, contextHolder] = message.useMessage();

  // State Variables: Add Player
  const [bet, setBet] = useState("");
  const debouncedBet = useDebounce(bet, 500);

  // State Variables: Loading
  const [loadingAddPlayer, setLoadingAddPlayer] = useState(false);
  const [loadingHit, setLoadingHit] = useState(false);
  const [loadingStand, setLoadingStand] = useState(false);

  // State Variables: Hands of Cards
  const [playersHand, setPlayersHand] = useState("");
  const [dealersHand, setDealersHand] = useState("");

  // Effect: Update Cards on Frontend on Reload
  useEffect(() => {
    getDealersHand();
    getPlayersHand();
    updatePlayersCards();
    updateDealersCards();
  });

  //-------------------------------Contract Interaction-------------------------------//
  const { data: signer } = useSigner();
  const blackjackContract = useContract({
    address: contractAddress,
    abi: contractAbiJson,
    signerOrProvider: signer,
  });

  // Contract Interaction: Get Contract Balance //
  // const getContractBalance = async () => {
  //   if (!blackjackContract) {
  //     messageApi.open({
  //       type: "warning",
  //       content: "Please connect to a wallet!",
  //       duration: 6,
  //     });
  //     return;
  //   }

  //   try {
  //     const balance = await blackjackContract.functions
  //       .getContractBalance()
  //       .catch((error) => {
  //         messageApi.open({
  //           type: "error",
  //           content: "Oops that didn't work :( => (Check wallet connection)",
  //           duration: 6,
  //         });
  //         console.log(error.message);
  //       });

  //     console.log(parseInt(balance));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Contract Interaction: Get Dealers Hand //
  const getDealersHand = async () => {
    if (!blackjackContract) {
      messageApi.open({
        type: "warning",
        content: "Please connect to a wallet!",
      });
      return;
    }

    try {
      const dealersHand = await blackjackContract.functions.getDealersHand();
      setDealersHand(dealersHand.toString());
    } catch (error) {
      console.error(error);
    }
  };

  // Contract Interaction: Get Players Hand //
  const getPlayersHand = async () => {
    if (!blackjackContract) {
      messageApi.open({
        type: "warning",
        content: "Please connect to a wallet!",
        duration: 6,
      });
      return;
    }

    try {
      const playersHand = await blackjackContract.functions.getPlayersHand();
      setPlayersHand(playersHand.toString());
    } catch (error) {
      console.error(error);
    }
  };

  // Contract Interaction: Get Current Player //
  // const getCurrentPlayer = async () => {
  //   if (!blackjackContract) {
  //     messageApi.open({
  //       type: "warning",
  //       content: "Please connect to a wallet!",
  //       duration: 6,
  //     });
  //     return;
  //   }

  //   try {
  //     const address = await blackjackContract.functions
  //       .getCurrentPlayer()
  //       .catch((error) => {
  //         messageApi.open({
  //           type: "error",
  //           content: "Oops that didn't work :( => (Check wallet connection)",
  //           duration: 6,
  //         });
  //         console.log(error.message);
  //       });

  //     console.log(address.toString());
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // Contract Interaction: Add Player //
  const addPlayer = async () => {
    if (!blackjackContract) {
      messageApi.open({
        type: "warning",
        content: "Please connect to a wallet!",
        duration: 6,
      });
      setLoadingAddPlayer(false);
      return;
    }

    try {
      const tx = await blackjackContract.functions
        .addPlayer({ value: parseInt(debouncedBet) })
        .catch((error) => {
          messageApi.open({
            type: "error",
            content: "Transaction Reverted",
            duration: 6,
          });
          setLoadingAddPlayer(false);
          console.log(error.message);
        });

      await tx.wait();
      messageApi.open({
        type: "success",
        content: "Player Added!",
        duration: 6,
      });
      setTimeout(5000);
      pendingNotifcation();
    } catch (error) {
      console.error(error);
    }
  };
  // Contract Interaction: Stand //
  const stand = async () => {
    if (!blackjackContract) {
      messageApi.open({
        type: "warning",
        content: "Please connect to a wallet!",
        duration: 6,
      });
      setLoadingStand(false);
      return;
    }

    try {
      const tx = await blackjackContract.functions.stand().catch((error) => {
        messageApi.open({
          type: "error",
          content: "Transaction Reverted",
          duration: 6,
        });
        setLoadingStand(false);
        console.log(error.message);
      });

      await tx.wait();
      messageApi.open({
        type: "success",
        content: "Player Stood!",
        duration: 6,
      });
    } catch (error) {
      console.error(error);
    }
  };
  // Contract Interaction: Hit //
  const hit = async () => {
    if (!blackjackContract) {
      messageApi.open({
        type: "warning",
        content: "Please connect to a wallet!",
        duration: 6,
      });
      setLoadingHit(false);
      return;
    }

    try {
      const tx = await blackjackContract.functions.hit().catch((error) => {
        messageApi.open({
          type: "error",
          content: "Transaction Reverted",
          duration: 6,
        });
        setLoadingHit(false);
        console.log(error.message);
      });

      await tx.wait();
      messageApi.open({
        type: "success",
        content: "Player Hit!",
        duration: 6,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Transaction: Fund Contract MATIC //
  // const { config: sendFundsConfig } = usePrepareSendTransaction({
  //   request: {
  //     to: contractAddress,
  //     value: 10000,
  //   },
  // });
  // const { sendTransaction: sendFunds } = useSendTransaction(sendFundsConfig);

  //-------------------------------Event Callback Functions-------------------------------//
  const updatePlayersCards = () => {
    var cards = playersHand.split(",");
    if (playersHand === "") {
      cards = [52, 52];
    }

    var playerCardContainer = document.getElementById("playerCardContainer");
    while (playerCardContainer.hasChildNodes()) {
      playerCardContainer.removeChild(playerCardContainer.firstChild);
    }
    for (var i = 0; i < cards.length; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "card shadow-lg shadow-black";
      ReactDOM.render(
        <Card cardNumber={cards[i]} width={200} height={200} />,
        newDiv
      );
      playerCardContainer.appendChild(newDiv);
    }
  };

  const updateDealersCards = () => {
    var cards = dealersHand.split(",");
    if (dealersHand === "") {
      cards = [52, 52, 52];
    }

    if (cards.length === 2) {
      cards.push(52);
    }

    var dealerCardContainer = document.getElementById("dealerCardContainer");
    while (dealerCardContainer.hasChildNodes()) {
      dealerCardContainer.removeChild(dealerCardContainer.firstChild);
    }
    for (var i = 0; i < cards.length; i++) {
      var newDiv = document.createElement("div");
      newDiv.className =
        "place-self-center p-1 border-8 border-theme-red rounded-2xl";
      ReactDOM.render(
        <Card cardNumber={cards[i]} width={230} height={230} />,
        newDiv
      );
      dealerCardContainer.appendChild(newDiv);
    }
  };

  const winnerNotification = (playerTot, dealerTot, winningsTot) => {
    notification.destroy();
    notification.success({
      message: `You Have Won ${winningsTot} Wei!!!`,
      description: `Player Total: ${playerTot}\n   Dealer Total: ${dealerTot}`,
      duration: 9,
    });
  };

  const loserNotification = (playerTot, dealerTot) => {
    notification.destroy();
    notification.warning({
      message: "Sorry, the odds weren't in your favor...this time",
      description: `Player Total: ${playerTot}\n   Dealer Total: ${dealerTot}`,
      duration: 9,
    });
  };

  const tieNotification = (playerTot, dealerTot, winningTot) => {
    notification.destroy();
    notification.info({
      message: `You have tied with the dealer & your bet of ${winningTot} Wei`,
      description: `Player Total: ${playerTot}\n   Dealer Total: ${dealerTot}`,
      duration: 9,
    });
  };

  const pendingNotifcation = () => {
    notification.destroy();
    notification.info({
      message: "Your being added to the smart contract, one sec...",
      description:
        "Pushing your transaction to the Mumbai testnet. Querying Chainlink oracles for random numbers. Good luck user.",
      duration: 11,
    });
  };

  //-------------------------------Event Listener-------------------------------//
  try {
    blackjackContract.on("RequestFulfilled", () => {
      getPlayersHand();
      getDealersHand();
      updatePlayersCards();
      updateDealersCards();
      setLoadingAddPlayer(false);
    });
  } catch (error) {
    console.error(error);
  }

  try {
    blackjackContract.on("Hit", () => {
      getPlayersHand();
      updatePlayersCards();
      setLoadingHit(false);
    });
  } catch (error) {
    console.error(error);
  }

  try {
    blackjackContract.on("Stand", (playerTotal, dealerTotal, winnings) => {
      const playerCount = parseInt(playerTotal);
      const dealerCount = parseInt(dealerTotal);
      const winningCount = parseInt(winnings);
      getDealersHand();
      getPlayersHand();
      updateDealersCards();
      updatePlayersCards();
      setLoadingStand(false);
      if (winningCount > 0) {
        winnerNotification(playerCount, dealerCount, winningCount);
      } else if (winningCount === bet) {
        tieNotification(playerCount, dealerCount, winningCount);
      } else {
        loserNotification(playerCount, dealerCount);
      }
    });
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="bg-theme-dark-green p-5 grid grid-cols-1 grid-rows-1 gap-10 wood-border">
      {contextHolder}
      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Dealers Hand</h1>
      </div>

      {/* <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => sendFunds?.()}
      >
        Send Funds
      </button>

      <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => getContractBalance?.()}
      >
        Get Contract Balance
      </button>

      <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => getDealersHand?.()}
      >
        Get Dealers Hand
      </button>

      <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => getPlayersHand?.()}
      >
        Get Players Hand
      </button>

      <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => getCurrentPlayer?.()}
      >
        Get Current Player
      </button>

      <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => updatePlayersCards?.()}
      >
        Update Player Cards
      </button>

      <button
        className="bg-theme-red rounded-2xl text-white"
        onClick={() => updateDealersCards?.()}
      >
        Update Dealer Cards
      </button> */}

      {/*-------------------------------Dealers Cards Section-------------------------------*/}
      <div
        className="p-0 md:p-14 md:pt-5 flex md:flex-row flex-col gap-5 justify-center"
        id="dealerCardContainer"
      ></div>

      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Make a Bet</h1>
      </div>

      {/*-------------------------------Game Interaction Section-------------------------------*/}
      <div className="bg-wood border-8 border-double border-white rounded-xl md:mx-32">
        <div className="flex flex-col">
          <div className="p-1 place-self-center">
            <div className="m-3 flex justify-center">
              <button
                onClick={() => {
                  setLoadingAddPlayer(true);
                  addPlayer?.();
                }}
                className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90"
              >
                {loadingAddPlayer ? <Spin size="medium" /> : "Place Your Bet"}
              </button>
            </div>
            <div className="m-3">
              <input
                type="number"
                placeholder="450 Wei"
                id="addPlayerInput"
                className="p-1 rounded-sm text-xl shadow-md shadow-black"
                onChange={(e) => setBet(e.target.value)}
                value={bet}
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-3 justify-center my-5">
          <div
            onClick={() => {
              setLoadingHit(true);
              hit?.();
            }}
            className="place-self-center"
          >
            <button className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90">
              {loadingHit ? <Spin size="medium" /> : "Hit"}
            </button>
          </div>
          <div className="place-self-center">
            <button
              onClick={() => {
                setLoadingStand(true);
                stand?.();
              }}
              className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90"
            >
              {loadingStand ? <Spin size="medium" /> : "Stand"}
            </button>
          </div>
        </div>
      </div>

      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Your Hand</h1>
      </div>

      {/*-------------------------------Players Cards Section-------------------------------*/}
      <div className="flex overflow-x-auto hide-scroll-bar border-8 border-theme-red rounded-2xl scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scrollbar-thumb-rounded-full">
        <div className="flex flex-nowrap ml-10 pt-7">
          <div className="myContainer" id="playerCardContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
