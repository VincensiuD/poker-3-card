import { cardDictionary } from "../components/picRetriever";


export function getCardValue(cardNumber){

    let cardCode = (cardDictionary[cardNumber]);
  
    return cardCode.rank;
  
  }


  export function getCardSuit(cardNumber){

    let cardCode = (cardDictionary[cardNumber]);
  
    return cardCode.suit;
  
  }

  export function getPersonHand(arr){

    const cardArray = arr.map((x) => cardDictionary[x]);

    return cardArray;
  }

  export function getHandRank(arr){

}

export function checkFlush(arr){

    let disparity = 0;

        for (let j = 0; j < arr.length - 1; j += 1) {
            if ((arr[j].suit !== arr[j + 1].suit )&&arr.length === 3)  {
              return false;
            }
            else if((arr[j].suit !== arr[j + 1].suit )){
                disparity++;
            }
            if(disparity>1)
            {
                return false;
            }
        }       
        
        return true;
    }
   
export function checkPairs(arr){

    let pairsDictionaryObject = {};


    for(let i = 0; i < arr.length; i++){

        let cardRank = getCardValue(arr[i]);
    if(!pairsDictionaryObject.hasOwnProperty(cardRank)){
        pairsDictionaryObject[cardRank] = 0;
    }
        pairsDictionaryObject[cardRank] += 1;
    }

    const dictLength = Object.keys(pairsDictionaryObject).length;

    if(dictLength === arr.length){
        return "NP";
    }

    if(dictLength === arr.length-1){
        return "SP";
    }

    switch(dictLength){

        case 1:
            return "3K";

        case 2:

            if(pairsDictionaryObject.includes(4)){
            return "4K";
            }
            return "FH";
        
        case 3:
            if(pairsDictionaryObject.includes(3)){
                return "3K";
            }
                return "2P"

        default:
           
            return -1;

    }

  
}