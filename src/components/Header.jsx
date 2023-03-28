import "../index.css";

const Header = () => {
  return (
    <div className="bg-theme-dark-green text-white text-center py-10 px-5 wood-border">
      <div className="mb-6">
        <h1 className="text-4xl">Blockchain Blackjack</h1>
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
