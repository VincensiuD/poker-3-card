class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
      this.name = suit+rank;
    }
  }

  class Player {
    constructor(cards, money) {
      this.cards = cards;
      this.money = money;
    }
  }