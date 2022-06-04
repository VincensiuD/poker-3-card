import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });




import { getPersonHand, getCardSuit, getCardValue, checkFlush,checkPairs } from './services/rankChecker';


describe("Checking if player's hand is a flush", () => {
    test("Returns true if player's hand is flush", () => {

        let player1 = [ { rank:2, suit:"H"},  { rank:3, suit:"H"},  { rank:4, suit:"H"}];
        let player2 = [ { rank:2, suit:"S"},  { rank:3, suit:"S"},  { rank:4, suit:"D"}]

        expect(checkFlush(player1)).toBe(true);
        expect(checkFlush(player2)).toBe(false);
  });
});


describe("Checking if player's hand has pair", () => {
  test("Returns type of pairs", () => {

      // let player1 = [ { rank:2, suit:"H"},  { rank:3, suit:"H"},  { rank:4, suit:"H"}];
      // let player2 = [ { rank:2, suit:"S"},  { rank:3, suit:"S"},  { rank:3, suit:"D"}];
      // let player3 = [ { rank:2, suit:"S"},  { rank:2, suit:"C"},  { rank:2, suit:"D"}];
      // let player4 = [ { rank:2, suit:"S"},  { rank:3, suit:"S"},  { rank:10, suit:"D"}, {rank:10, suit:"H"}, {rank:10, suit:"C"}];
      // let player5 = [ { rank:4, suit:"S"},  { rank:4, suit:"S"},  { rank:4, suit:"D"}, {rank:10, suit:"H"}, {rank:10, suit:"C"}];
      // let player6 = [ { rank:2, suit:"S"},  { rank:10, suit:"S"},  { rank:10, suit:"D"}, {rank:10, suit:"H"}, {rank:10, suit:"C"}];

      // expect(checkPairs(player1)).toBe("NP");
      // expect(checkPairs(player2)).toBe("SP");
      // expect(checkPairs(player3)).toBe("3K");
      // expect(checkPairs(player4)).toBe("2P");
      // expect(checkPairs(player5)).toBe("FH");
      // expect(checkPairs(player6)).toBe("4K");


      let p1 = [11,10,9];
      let p2 = [1,2,5];
      let p3 = [1,2,14,33,44,48];
      let p4 = [3,4,5,6,23,35];
      let p5 = [17,18,33,34,35,19];
      let p6 = [33,34,35,36,41,50];
      expect(checkPairs(p1)).toBe("3K");
      expect(checkPairs(p2)).toBe("SP");
      expect(checkPairs(p3)).toBe("SP");
    //  expect(checkPairs(p4)).toBe(-1);
      expect(checkPairs(p5)).toBe("FH");
      expect(checkPairs(p6)).toBe("4K");
});
});