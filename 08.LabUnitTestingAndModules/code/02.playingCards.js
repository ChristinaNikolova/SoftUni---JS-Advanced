function solve(face, suit) {
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
  let validSuits = ["S", "D", "C", "H"];

  if (!validFaces.includes(face) || !validSuits.includes(suit)) {
    throw new Error(`Invalid card: ${face}${suit}`);
  }

  let card = {
    face: face,
    suit: suit,
    toString() {
      let symbols = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663",
      };

      return face + symbols[suit];
    },
  };

  return card;
}

console.log(solve("A", "S").toString());
