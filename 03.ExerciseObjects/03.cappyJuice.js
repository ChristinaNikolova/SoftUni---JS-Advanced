function solve(input = []) {
    let juices = {};
    let bottles = {};

    input.forEach((line) => {

        let [juiceName, juiceQuantity] = line.split("=>").map(x => x.trim());
        juiceQuantity = +juiceQuantity;

        if(!juices.hasOwnProperty(juiceName)){
            juices[juiceName] = 0;
        }

        juices[juiceName] += juiceQuantity;

        if(juices[juiceName] / 1000 >= 1){
            let bottlesCount = Math.floor(juices[juiceName] / 1000);
            juices[juiceName] -= bottlesCount * 1000;

            if(!bottles.hasOwnProperty(juiceName)){
                bottles[juiceName] = 0;
            }

            bottles[juiceName] += bottlesCount;
        }
    });

    for (const juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`)
    }
}

solve(
[
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
