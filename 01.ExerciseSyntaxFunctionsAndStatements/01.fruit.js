function solve(fruit, weigthGramms, pricePerKg) {
    let weigthKg = weigthGramms / 1000;
    let neededMoney = pricePerKg * weigthKg;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
