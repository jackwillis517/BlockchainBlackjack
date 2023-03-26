import Card from "./Card";
import "../index.css";
import { useEffect } from "react";

const Body = () => {
  useEffect(() => {
    testAdd();
  }, []);

  const testAdd = () => {
    var testArr = [23, 3, 19, 21];
    var playerCardContainer = document.getElementById("playerCardContainer");
    for (var i = 0; i < testArr.length; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "card shadow-lg shadow-black";
      newDiv.innerHTML = `<Card cardNumber={${testArr[i]}} width={200} height={200} />`;
      playerCardContainer.appendChild(newDiv);
      console.log(newDiv.innerHTML);
    }
  };

  return (
    <div className="bg-theme-dark-green p-5 grid grid-cols-1 grid-rows-1 gap-10 wood-border">
      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Dealers Hand</h1>
      </div>

      <div className="p-0 md:p-14 md:pt-5 flex md:flex-row flex-col gap-5 justify-center">
        <div className="p-1 border-8 border-theme-red rounded-2xl shadow-md hover:scale-105 hover:ease-in-out">
          <Card cardNumber={1} width={230} height={230} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={32} width={230} height={230} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={52} width={230} height={230} />
        </div>
      </div>

      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Make a Bet</h1>
      </div>

      <div className="bg-wood border-8 border-double border-white rounded-xl md:mx-32">
        <div className="flex flex-col">
          <form className="p-1 place-self-center">
            <div className="m-3 flex justify-center">
              <button className="bg-theme-red text-white text-2xl rounded-xl mt-4 mb-2 p-2 px-3 shadow-md shadow-black hover:bg-[#7c2e2e] hover:ring ring-offset-4 ring-offset-white hover:scale-90">
                Place Your Bet
              </button>
            </div>
            <div className="m-3">
              <input
                type="number"
                placeholder="450 Wei"
                id="addPlayerInput"
                className="p-1 rounded-sm text-xl shadow-md shadow-black"
              />
            </div>
          </form>
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

      <div className="flex overflow-x-auto pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 pt-7">
          <div className="container" id="playerCardContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
