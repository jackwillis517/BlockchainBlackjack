import cardTest from "../cards/JC.svg";
import cardTest2 from "../cards/AH.svg";
import cardTest3 from "../cards/1B.svg";

export function Body() {
  return (
    <div className="bg-theme-dark-green p-5 grid grid-cols-1 grid-rows-1 gap-10 wood-border">
      <div className="text-3xl text-white place-self-center mt-10">
        <h1>Dealers Hand</h1>
      </div>
      <div className="p-0 md:p-14 md:pt-5 flex md:flex-row flex-col gap-5 justify-center">
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <img alt="testCard" src={cardTest} width="250" height="250" />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <img alt="testCard" src={cardTest2} width="250" height="250" />
        </div>
        <div className="p-1 border-8 border-theme-red rounded-2xl">
          <img alt="testCard" src={cardTest3} width="250" height="250" />
        </div>
      </div>
      <div className="bg-orange-500 p-32">
        <div></div>
        <div></div>
      </div>
      <div className="bg-red-500 p-32">
        <div></div>
      </div>
    </div>
  );
}

export default Body;
