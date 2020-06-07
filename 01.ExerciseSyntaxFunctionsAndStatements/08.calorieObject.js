function solve(input = []) {
    let object = {};

    for(let i = 0; i < input.length; i+=2){
        let nameProduct = input[i];
        let calorieCurrentProduct = +input[i+1];
        object[nameProduct] = calorieCurrentProduct;
    }

    console.log(object);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
