function solve(...input) {

    let typeCounter = {};

    input.forEach((element) => {
        let typeElement = typeof(element);

        console.log(`${typeElement}: ${element}`);

        if(!typeCounter.hasOwnProperty(typeElement)){
            typeCounter[typeElement] = 0;
        }

        typeCounter[typeElement]++;
    });

    let sortedTypes = Object.entries(typeCounter).sort((a, b) => {

        let [aKey, aValue] = a;
        let [bKey, bValue] = b;

        return bValue - aValue;
    });

    for (const currentType of sortedTypes) {
        console.log(`${currentType[0]} = ${currentType[1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
