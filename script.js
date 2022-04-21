// In this problem we need to calculate The BMI (Body Mass Index of two persons named John and Mark.)
// The values are  given below:


let userHeight = prompt("Please enter your height in (Mitres)  :");
let userWeight = prompt("Enter your Weight in (Kilo Gram)  :");
let bmi = userWeight/userHeight**2;
if(bmi<20){
    alert(`Oops! You need to eat more. Your BMI is: ${bmi}`);
}
else if (bmi<=24){
    alert(`Great! Your BMI is Perfect. Your BMI is: ${bmi}`);
}
else if(bmi<=30){
    alert(`Hmm! You are getting fatty. Try to go through a healthy diet. Your BMI is: ${bmi}`)
}
else if(bmi>=30){
    alert(`Oh! Your weight is much more then your height. You need to control your fooding habit. Your BMI is: ${bmi}`)
}
else{
    alert(`Unknown inputs are given. Please follow the instuction.....`)
}