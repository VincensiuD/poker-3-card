import { cardDictionary } from "../components/picRetriever";


export function getCardValue(cardNumber){

    let cardCode = (cardDictionary[cardNumber]);
  
    return cardCode.value;
  
  }


  export function getCardSuit(cardNumber){

    let cardCode = (cardDictionary[cardNumber]);
  
    return cardCode.suit;
  
  }

  export function getPersonHand(arr){

    const cardArray = arr.map((x) => cardDictionary[x]);

    return cardArray;
  }

