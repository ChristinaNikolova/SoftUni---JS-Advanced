function solve(name, age, weightKg, heightCm) {
    let person = {
        name,
        personalInfo: {
            age,
            weight: weightKg,
            height: heightCm,
        }
    };

    let heightM = heightCm / 100;

    let bmi = Math.round(weightKg / Math.pow(heightM, 2));

    let status = "";

    if(bmi < 18.50){
        status = "underweight";
    } else if(bmi < 25.00){
        status = "normal";
    } else if(bmi < 30.00){
        status = "overweight";
    } else {
        status = "obese";
        person["recommendation"] = "admission required";
    }

    person["BMI"] = bmi;
    person["status"] = status;

    return person;
}

console.log(solve("Peter", 29, 75, 182));
