import CA from "../cards/AC.svg";
import C2 from "../cards/2C.svg";
import C3 from "../cards/3C.svg";
import C4 from "../cards/4C.svg";
import C5 from "../cards/5C.svg";
import C6 from "../cards/6C.svg";
import C7 from "../cards/7C.svg";
import C8 from "../cards/8C.svg";
import C9 from "../cards/9C.svg";
import CT from "../cards/TC.svg";
import CJ from "../cards/JC.svg";
import CQ from "../cards/QC.svg";
import CK from "../cards/KC.svg";

import SA from "../cards/AS.svg";
import S2 from "../cards/2S.svg";
import S3 from "../cards/3S.svg";
import S4 from "../cards/4S.svg";
import S5 from "../cards/5S.svg";
import S6 from "../cards/6S.svg";
import S7 from "../cards/7S.svg";
import S8 from "../cards/8S.svg";
import S9 from "../cards/9S.svg";
import ST from "../cards/TS.svg";
import SJ from "../cards/JS.svg";
import SQ from "../cards/QS.svg";
import SK from "../cards/KS.svg";

import HA from "../cards/AH.svg";
import H2 from "../cards/2H.svg";
import H3 from "../cards/3H.svg";
import H4 from "../cards/4H.svg";
import H5 from "../cards/5H.svg";
import H6 from "../cards/6H.svg";
import H7 from "../cards/7H.svg";
import H8 from "../cards/8H.svg";
import H9 from "../cards/9H.svg";
import HT from "../cards/TH.svg";
import HJ from "../cards/JH.svg";
import HQ from "../cards/QH.svg";
import HK from "../cards/KH.svg";

import DA from "../cards/AD.svg";
import D2 from "../cards/2D.svg";
import D3 from "../cards/3D.svg";
import D4 from "../cards/4D.svg";
import D5 from "../cards/5D.svg";
import D6 from "../cards/6D.svg";
import D7 from "../cards/7D.svg";
import D8 from "../cards/8D.svg";
import D9 from "../cards/9D.svg";
import DT from "../cards/TD.svg";
import DJ from "../cards/JD.svg";
import DQ from "../cards/QD.svg";
import DK from "../cards/KD.svg";

import B from "../cards/1B.svg";

const Card = ({ cardNumber, width, height }) => {
  var cardMap = [
    CA,
    C2,
    C3,
    C4,
    C5,
    C6,
    C7,
    C8,
    C9,
    CT,
    CJ,
    CQ,
    CK,
    SA,
    S2,
    S3,
    S4,
    S5,
    S6,
    S7,
    S8,
    S9,
    ST,
    SJ,
    SQ,
    SK,
    HA,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    H8,
    H9,
    HT,
    HJ,
    HQ,
    HK,
    DA,
    D2,
    D3,
    D4,
    D5,
    D6,
    D7,
    D8,
    D9,
    DT,
    DJ,
    DQ,
    DK,
    B,
  ];
  console.log(width);
  return (
    <div>
      <img alt="card" src={cardMap[cardNumber]} width={width} height={height} />
    </div>
  );
};

export default Card;
