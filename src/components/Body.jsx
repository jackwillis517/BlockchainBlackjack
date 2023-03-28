import "../index.css";
import ReactDOM from "react-dom";
import Card from "./Card";
import { contractAddress } from "../Contract";
import { contractAbi } from "../Contract";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Spin, message } from "antd";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

const Body = () => {
  useEffect(() => {
    testAdd();
  }, []);

  //-------------------------------State Variables-------------------------------//
  // State Variables: User Address & Antd Messages
  const { address } = useAccount();
  const [messageApi, contextHolder] = message.useMessage();

  // State Variables: Add Player
  const [bet, setBet] = useState("");
  const debouncedBet = useDebounce(bet, 500);

  //-------------------------------Contract Interaction-------------------------------//
  // Contract Interaction: Add Player //
  // Prepare Contract Write: Add Player
  const {
    config: addPlayerConfig,
    error: prepareAddPlayerError,
    isError: isPrepareAddPlayerError,
  } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractAbi,
    chainId: 80001,
    functionName: "addPlayer",
    overrides: {
      gasLimit: 21000,
      from: address,
      value: parseInt(debouncedBet),
    },
  });
  // Contract Write: Add Player
  const {
    data: addPlayerData,
    error: addPlayerError,
    isError: isAddPlayerError,
    write: addPlayer,
  } = useContractWrite(addPlayerConfig);
  const { isLoading: isAddPlayerLoading, isSuccess: isAddPlayerSuccess } =
    useWaitForTransaction({
      hash: addPlayerData?.hash,
    });
  // Error Handling: Add Player
  if (isPrepareAddPlayerError || isAddPlayerError) {
    messageApi.open({
      type: "error",
      content: "Player Wasn't Added",
    });
    console.log(`Players Bet: ${bet}`);
    console.log(`Contract Prepare Write Error: ${prepareAddPlayerError}`);
    console.log(`Contract Write Error: ${addPlayerError}`);
  } else if (isAddPlayerSuccess) {
    messageApi.open({ type: "success", content: "Player Added!" });
    console.log(`Players Bet: ${bet}`);
  }
  // Contract Interaction: Get Contract Balance //
  // Contract Interaction: Stand //
  // Contract Interaction: Get Current Players Bet //
  // Contract Interaction: Get Dealers Hand & Get Players Hand //
  // Contract Interaction: Hit //

  // Transaction: Fund Contract 0.5 MATIC //

  const testAdd = () => {
    var testArr = [9, 3, 19, 21, 11, 49, 50, 44, 28];
    var playerCardContainer = document.getElementById("playerCardContainer");
    for (var i = 0; i < testArr.length; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "card shadow-lg shadow-black";
      ReactDOM.render(
        <Card cardNumber={testArr[i]} width={200} height={200} />,
        newDiv
      );
      playerCardContainer.appendChild(newDiv);
      console.log(newDiv.innerHTML);
    }
  };

  return (
    <div className="bg-theme-dark-green p-5 grid grid-cols-1 grid-rows-1 gap-10 wood-border">
      {contextHolder}
      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Dealers Hand</h1>
      </div>

      {/*-------------------------------Dealers Cards Section-------------------------------*/}
      <div className="p-0 md:p-14 md:pt-5 flex md:flex-row flex-col gap-5 justify-center ">
        <div className="place-self-center p-1 border-8 border-theme-red rounded-2xl shadow-md hover:scale-105 hover:ease-in-out">
          <Card cardNumber={1} width={230} height={230} />
        </div>
        <div className="place-self-center p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={32} width={230} height={230} />
        </div>
        <div className="place-self-center p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={52} width={230} height={230} />
        </div>
      </div>

      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Make a Bet</h1>
      </div>

      {/*-------------------------------Game Interaction Section-------------------------------*/}
      <div className="bg-wood border-8 border-double border-white rounded-xl md:mx-32">
        <div className="flex flex-col">
          <div className="p-1 place-self-center">
            <div className="m-3 flex justify-center">
              <button
                disabled={!addPlayer || isAddPlayerLoading}
                onClick={() => addPlayer?.()}
                className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90"
              >
                {isAddPlayerLoading ? <Spin size="medium" /> : "Place Your Bet"}
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
          <div className="place-self-center">
            <button className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90">
              Hit
            </button>
          </div>
          <div className="place-self-center">
            <button className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90">
              Stand
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
