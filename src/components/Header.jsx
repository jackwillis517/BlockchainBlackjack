import "../index.css";

const Header = () => {
  return (
    <div className="bg-theme-dark-green text-white text-center py-10 wood-border">
      <div className="mb-6">
        <h1 className="text-4xl">Blockchain Blackjack</h1>
      </div>
      <div>
        <h1 className="text-2xl mb-4">
          DEALER MUST DRAW TO 16 AND STAND ON 17
        </h1>
        <div className="py-2 mx-6 border-8 border-double border-white rounded-2xl">
          <h1 className="text-theme-red font-bold text-2xl">
            PAYS 2 TO 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MINIMUM BET: 100 Wei
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAXIUMUM BET: 1000 Wei
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
