import "../index.css";

const Header = () => {
  return (
    <div className="bg-theme-dark-green text-white text-center py-10 px-5 wood-border">
      <div className="mb-6 flex flex-col gap-5">
        <div>
          <h1 className="text-4xl">Blockchain Blackjack</h1>
        </div>
        <div>
          <a
            href="https://mumbaifaucet.com/"
            className="bg-theme-red rounded-xl mt-4 mb-2 p-2 hover:bg-[#7c2e2e] hover:scale-90"
          >
            Get Matic
          </a>
          <a
            href="https://jackwillis.netlify.app/"
            className="bg-theme-red rounded-xl mt-4 mb-2 ml-5 p-2 hover:bg-[#7c2e2e] hover:scale-90"
          >
            My Portfolio
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-4">
          DEALER MUST DRAW TO 16 AND STAND ON 17
        </h1>
        <div className="flex flex-col md:flex-row md:gap-20 justify-center py-2 mx-6 border-8 border-double border-white rounded-2xl">
          <div className="text-theme-red font-bold text-2xl">PAYS 2 TO 1</div>
          <div className="text-theme-red font-bold text-2xl">
            MINIMUM BET: 100 Wei
          </div>
          <div className="text-theme-red font-bold text-2xl">
            MAXIUMUM BET: 1000 Wei
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
