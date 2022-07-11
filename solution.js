//Q1 Store Mark's and John's mass and height in variables.
const markHeight = 1.65;
let markMass = 75.5;
let johnHeight = 1.87;
let johnMass = 68;


//Q2 Calculate both their BMIs and store their BMIs in variables. 

let markBMI = markMass / (markHeight * markHeight);
console.log(markBMI);
let johnBMI = johnMass/ (johnHeight *johnMass)
console.log(johnBMI);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
const markMoreBeefCake = markBMI >= johnBMI;
console.log('Q3:', markMoreBeefCake);


//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
if ((markBMI < johnBMI))
{console.log('Q4: is marks BMI is higher, it is', markBMI.toFixed(2))}
else{
    console.log('Q5: johns Bmi is higher, it is', johnBMI.toFixed(2))
}


//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if (( markBMI< johnBMI))
{console.log('q5: Marks BMI');}