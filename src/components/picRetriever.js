import React,  { useState, useEffect } from "react";
import C2 from "../image/2Club.png";
import D2 from "../image/2Diamond.png";
import H2 from "../image/2Heart.png";
import S2 from "../image/2Spade.png";
import C3 from "../image/3Club.png";
import D3 from "../image/3Diamond.png";
import H3 from "../image/3Heart.png";
import S3 from "../image/3Spade.png";
import C4 from "../image/4Club.png";
import D4 from "../image/4Diamond.png";
import H4 from "../image/4Heart.png";
import S4 from "../image/4Spade.png";
import C5 from "../image/5Club.png";
import D5 from "../image/5Diamond.png";
import H5 from "../image/5Heart.png";
import S5 from "../image/5Spade.png";
import C6 from "../image/6Club.png";
import D6 from "../image/6Diamond.png";
import H6 from "../image/6Heart.png";
import S6 from "../image/6Spade.png";
import C7 from "../image/7Club.png";
import D7 from "../image/7Diamond.png";
import H7 from "../image/7Heart.png";
import S7 from "../image/7Spade.png";
import C8 from "../image/8Club.png";
import D8 from "../image/8Diamond.png";
import H8 from "../image/8Heart.png";
import S8 from "../image/8Spade.png";
import C9 from "../image/9Club.png";
import D9 from "../image/9Diamond.png";
import H9 from "../image/9Heart.png";
import S9 from "../image/9Spade.png";
import CT from "../image/10Club.png";
import DT from "../image/10Diamond.png";
import HT from "../image/10Heart.png";
import ST from "../image/10Spade.png";
import CJ from "../image/JClub.png";
import DJ from "../image/JDiamond.png";
import HJ from "../image/JHeart.png";
import SJ from "../image/JSpade.png";
import CQ from "../image/QClub.png";
import DQ from "../image/QDiamond.png";
import HQ from "../image/QHeart.png";
import SQ from "../image/QSpade.png";
import CK from "../image/KClub.png";
import DK from "../image/KDiamond.png";
import HK from "../image/KHeart.png";
import SK from "../image/KSpade.png";
import CA from "../image/AClub.png";
import DA from "../image/ADiamond.png";
import HA from "../image/AHeart.png";
import SA from "../image/ASpade.png";

export const cardImages = {
  1:  C2,
  2:  D2,
  3:  H2,
  4:  S2,
  5:  C3,
  6:  D3,
  7: H3,
   8: S3,
   9: C4,
   10: D4,
   11: H4,
   12: S4,
   13: C5,
   14: D5,
    15:H5,
   16: S5,
    17:C6,
    18: D6,
    19: H6,
    20:S6,
    21:C7,
    22:D7,
    23:H7,
    24:S7,
    25:C8,
    26:D8,
    27:H8,
    28:S8,
    29:C9,
    30:D9,
    31:H9,
    32:S9,
    33:CT,
    34:DT,
    35:HT,
    36:ST,
    37:CJ,
    38:DJ,
    39:HJ,
    40:SJ,
    41:CQ,
    42:DQ,
    43:HQ,
    44:SQ,
    45:CK,
    46:DK,
    47:HK,
    48:SK,
    49:CA,
    50:DA,
    51:HA,
    52:SA,
  }

export function generateImage(cardName)
{

    return(   
    cardImages[cardName]
    );
}