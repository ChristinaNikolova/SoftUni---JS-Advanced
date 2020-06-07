function solve(input = []) {
  let heros = [];
  input.forEach((line) => {
    let [heroName, heroLevel, heroItems] = line.split("/").map((x) => x.trim());
    heroLevel + heroLevel;
    heroItems =
      heroItems ? heroItems.split(",").map((x) => x.trim()) : [];

    let hero = {
      name: heroName,
      level: +heroLevel,
      items: heroItems,
    };

    heros.push(hero);
  });

  console.log(JSON.stringify(heros));
}

solve([
  "Isacc / 25 ",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
