(function () {
  let validFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let Suits = {
    SPADES: "♠",
    HEARTS: "♥",
    DIAMONDS: "♦",
    CLUBS: "♣",
  };

  class Card {
    constructor(face, suit) {
      this.face = face;
      this.suit = suit;
    }

    get face() {
      return this.innerFace;
    }

    set face(face) {
      if (!validFaces.includes(face)) {
        throw new Error("Invalid face " + face);
      }

      this.innerFace = face;
    }

    get suit() {
      return this.innerSuit;
    }

    set suit(suit) {
      let valuesSuit = Object.values(Suits);

      if (!valuesSuit.includes(suit)) {
        throw new Error("Invalid suit " + suit);
      }

      this.innerSuit = suit;
    }
  }

  return {
    Card,
    Suits,
  };
})();
