import Card from "./Card";

const Body = () => {
  return (
    <div className="bg-theme-dark-green p-5 grid grid-cols-1 grid-rows-1 gap-10 wood-border">
      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Dealers Hand</h1>
      </div>

      <div className="p-0 md:p-14 md:pt-5 flex md:flex-row flex-col gap-5 justify-center">
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={1} width={250} height={250} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={32} width={250} height={250} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={52} width={250} height={250} />
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

      <div className="p-0 md:p-14 md:pt-5 flex md:flex-row flex-col flex-wrap gap-5 justify-center">
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={14} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={3} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={50} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={14} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={3} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={50} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={14} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={3} width={175} height={175} />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <Card cardNumber={50} width={175} height={175} />
        </div>
      </div>
    </div>
  );
};

export default Body;
