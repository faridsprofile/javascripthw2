// Problem 01
let fruitsName = ['apple', 'banana', 'cherry'];
let resultProb01 = fruitsName.toString();
console.log("Array ['apple', 'banana', 'cherry'] to string = ", resultProb01);

//Problem 02
let arrayNumbers = [10, 20, 30, 40, 50];
let thirdElement = arrayNumbers.at(2);
console.log("3rd Element of the array [10, 20, 30, 40, 50] is - ", thirdElement);

//Problem 03
let colorsName = ['red', 'green', 'blue'];
let resultProb03 = colorsName.join('-');
console.log("After join with - = ", resultProb03);

//Problem 04
let arrayNumbersProb04 = [1, 2, 3, 4, 5];
arrayNumbersProb04.pop();
console.log("After remove last element from the array - ", arrayNumbersProb04);

//Problem 05
let fruitsProb05 = ['apple', 'banana'];
fruitsProb05.push('grape');
console.log("after add grapes the array is - ", fruitsProb05);

//Problem 06
let vehicles = ['car', 'bike', 'bus'];
vehicles.shift();
console.log("after remove first element the array is - ", vehicles);

//Problem 07
let vehiclesPorb07 = ['boat', 'ship'];
vehiclesPorb07.unshift('train', 'plane');
console.log("after add train and plane the array is - ", vehiclesPorb07);

//Problem 08
let animalsProb08 = ['dog', 'cat', 'bird'];
animalsProb08.splice(1,1);
console.log("after delete 2nd elements the array is - ", animalsProb08);

//Problem 09
let prob09Array1 = [1, 2, 3];
let Prob09Array2 = [4, 5, 6];

let mergedArray = prob09Array1.concat(Prob09Array2);
console.log("After meger arrays: [1, 2, 3] and [4, 5, 6] - ", mergedArray);

//Problem 10
let prob10Array = ["a", "b", "c", "d", "e", "f"];
prob10Array.splice(2, 2);
console.log("after delete c & d - ", prob10Array);


//Problem 11
let prob11Array = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth"];

console.log("Index 4 = ", prob11Array[4]);

//Problem 12
let longString = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat lime melon nectar olive peach pear plum pomegranate rhubarb starfruit tomato vanilla";

let indexOfFennel = longString.indexOf("fennel");

console.log("Index of fennel = ", indexOfFennel);

//Problem 13
let prob13Arry = ["apple", "banana", "cherry", "date", "fig"];
prob13Arry.splice(3,2);
console.log("after remove last 2 elements = ", prob13Arry);


//Problem 14
let prob14Array = ["dog", "cat", "fish", "bird"];
let prob14Result = prob14Array.join(", ");
console.log("comma separated string - ", prob14Result);

//Problem 15
let prob15Array = ["apple", "orange", "banana", "grape"];
let prob15Result = prob15Array.join("-");
console.log("each element sepratated by - =", prob15Result);

//Problem 16
let prob16Array = ["b", "c", "d"];
prob16Array.unshift("a", "b", "c");
console.log("after add elements to the beginning of the array - ", prob16Array);


//Problem 17
let prob17Array = [1, 2, 3, 4, 5];
delete prob17Array[3];
console.log("after delete element 4 - ", prob17Array);

//Problem 18
let prob18Array1 = [1, 2, 3];
let prob18Array2 = [4, 5, 6];

let prob18MergedArray = prob18Array1.concat(prob18Array2);
let probl18SlicedArray = prob18MergedArray.slice(0, 4);
console.log("use slice get first 4 elements - ", probl18SlicedArray);

//Problem 19
let prob19Array = ["a", "b", "c", "d", "e"];
prob19Array.splice(1, 2, "x", "y");
console.log("Updated array - ", prob19Array);

//Problem 20
let prob20Array = [10, 20, 30, 40, 50];
let prob20Subarray = prob20Array.slice(1, 4);
console.log(prob20Subarray);



//Problem 21
let problemArray = [1, 2, 3, 4, 5];
let str = problemArray.join(',');
console.log("String:", str); 
let newArr = str.split(',');
console.log("Array:", newArr);


//Problem 22
let prob22Array = ["a", "b", "c", "d", "e", "f"];
let firstElement = prob22Array.at(0);
let lastElement = prob22Array.at(-1);

console.log("first element:", firstElement);
console.log("last element:", lastElement);


//Problem 23
let prob23Array = ['apple', 'banana', 'cherry', 'date'];
prob23Array.splice(1, 1);
console.log("after remove 2nd element - ", prob23Array);


//Problem 24
let prob24Array = [10, 20, 30, 40, 50];
let firstThreeElements = prob24Array.slice(0, 3);
console.log("extract first 3 elemets - ", firstThreeElements);




