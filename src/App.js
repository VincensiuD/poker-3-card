import './App.css';
import { generateImage } from './components/picRetriever';
import {getPlayerRank} from './services/rankChecker'

function App() {

  function createRandom(){

    let playerCardSequenceArray = [];    
   
    for(let i =0; i <6; i++){

      let looping = true;
      while(looping){
      
        let randomCard = Math.floor((Math.random() * 52)+1);

        if(!playerCardSequenceArray.includes(randomCard)){
        playerCardSequenceArray.push(randomCard);
        looping = false;
        }
      }

    }
    return playerCardSequenceArray;
  }

  let combinedCardSequenceArray = createRandom();
  let playerCardSequenceArray = combinedCardSequenceArray.slice(0,3);
  let dealerCardSequenceArray = combinedCardSequenceArray.slice(3,6);

  function picMapper(array){
    return(
      array.map((x,index)=> <img src={generateImage(array[index])} alt="card"  style={{width:130, height:180, margin:3 }}/>)
    );
  }

  return (
    <div className="App">
        <p>Dealer's cards</p>
        <div>          
          {picMapper(dealerCardSequenceArray)}
        </div>
        <p>Player's cards</p>
        <div>
         {picMapper(playerCardSequenceArray)}
        </div>
        <div>
  
         
        </div>
    </div>
  );
}

export default App;
