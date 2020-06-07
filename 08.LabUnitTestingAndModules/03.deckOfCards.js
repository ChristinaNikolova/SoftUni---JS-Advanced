function solve(cards = []) {
  function createCard(face, suit) {
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
  let result = "";
  
  for (const current of cards) {
    let face = current.substring(0, current.length - 1);
    let suit = current.substring(current.length - 1);

    try {
      let card = createCard(face, suit);
      result += card.toString() + " ";
    } catch (ex) {
      result = ex.message;
      break;
    }
  }

  console.log(result);
}

solve(["AS", "10D", "KH", "2C"]);
solve(["5S", "3D", "QD", "1C"]);
