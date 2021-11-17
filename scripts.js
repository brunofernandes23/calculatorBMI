//Entry of values
let name = prompt('Inform your name:');
let height = prompt('Inform your height:');
let weight = prompt('Inform your weight:');

//transform the data into float
height = parseFloat(height);
weight = parseFloat(weight);

//converts centimeters into meters
height = height / 100;

//calculate the bmi and assign the variable
let bmi = weight / (height * height);

bmi = parseFloat(bmi);

//check condition and assign rating


if (bmi < 16) {
    classification = 'Very severe underweight';
} else if (bmi >= 16 && bmi <= 16.99) {
    classification = 'Severe underweight';
} else if (bmi >= 17 && bmi <= 18.49) {
    classification = 'Low weight';
} else if (bmi >= 18.50 && bmi <= 24.99) {
    classification = 'Normal weight';
} else if (bmi >= 25 && bmi <= 29.99) {
    classification = 'Overweight';
} else if (bmi >= 30 && bmi <= 34.99) {
    classification = 'Grade I obesity';
} else if (bmi >= 35 && bmi <= 39.99) {
    classification = 'Grade II obesity';
} else {
    classification = 'Grade III obesity';
}

document.write(`${name} it has Body Mass Index iqual to ${bmi}, being classify as: ${classification}`);
