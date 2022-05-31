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

export const cardDictionary = {
  C2: {image:C2, rank:1, suit:"C"}, 
  1: {image:C2, rank:2, suit:"C"},
2: {image:S2, rank:2, suit:"S"},
3: {image:D2, rank:2, suit:"D"},
4: {image:H2, rank:2, suit:"H"},
5: {image:C3, rank:3, suit:"C"},
6: {image:S3, rank:3, suit:"S"},
7: {image:D3, rank:3, suit:"D"},
8: {image:H3, rank:3, suit:"H"},
9: {image:C4, rank:4, suit:"C"},
10: {image:S4, rank:4, suit:"S"},
11: {image:D4, rank:4, suit:"D"},
12: {image:H4, rank:4, suit:"H"},
13: {image:C5, rank:5, suit:"C"},
14: {image:S5, rank:5, suit:"S"},
15: {image:D5, rank:5, suit:"D"},
16: {image:H5, rank:5, suit:"H"},
17: {image:C6, rank:6, suit:"C"},
18: {image:S6, rank:6, suit:"S"},
19: {image:D6, rank:6, suit:"D"},
20: {image:H6, rank:6, suit:"H"},
21: {image:C7, rank:7, suit:"C"},
22: {image:S7, rank:7, suit:"S"},
23: {image:D7, rank:7, suit:"D"},
24: {image:H7, rank:7, suit:"H"},
25: {image:C8, rank:8, suit:"C"},
26: {image:S8, rank:8, suit:"S"},
27: {image:D8, rank:8, suit:"D"},
28: {image:H8, rank:8, suit:"H"},
29: {image:C9, rank:9, suit:"C"},
30: {image:S9, rank:9, suit:"S"},
31: {image:D9, rank:9, suit:"D"},
32: {image:H9, rank:9, suit:"H"},
33: {image:CT, rank:10, suit:"C"},
34: {image:ST, rank:10, suit:"S"},
35: {image:DT, rank:10, suit:"D"},
36: {image:HT, rank:10, suit:"H"},
37: {image:CJ, rank:11, suit:"C"},
38: {image:SJ, rank:11, suit:"S"},
39: {image:DJ, rank:11, suit:"D"},
40: {image:HJ, rank:11, suit:"H"},
41: {image:CQ, rank:12, suit:"C"},
42: {image:SQ, rank:12, suit:"S"},
43: {image:DQ, rank:12, suit:"D"},
44: {image:HQ, rank:12, suit:"H"},
45: {image:CK, rank:13, suit:"C"},
46: {image:SK, rank:13, suit:"S"},
47: {image:DK, rank:13, suit:"D"},
48: {image:HK, rank:13, suit:"H"},
49: {image:CA, rank:14, suit:"C"},
50: {image:SA, rank:14, suit:"S"},
51: {image:DA, rank:14, suit:"D"},
52: {image:HA, rank:14, suit:"H"},
};

export function generateImage(cardNumber) {

  let cardCode = (cardDictionary[cardNumber]);


  return  cardCode.image;
}


