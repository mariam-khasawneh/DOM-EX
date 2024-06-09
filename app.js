// Q1 : Assume an array of different fruits is given (5 elements),
// you have to use dom to add images for all  items of the array to the html element
// as(ul) and show it in the html file.give it a suitable style.
let fruit = ["apple", "Banana", "Orang", "cherry", "Strawberry"];
for (i = 0; i < fruit.length; i++){
    
}



// _______________________________________________________________________________

// Q2: Create a function that takes two arguments, one is an array and the other is a number,
// then return the index of the given value or return -1 if the element cannot be found.

function searchIndex(arrayToPass, numToSearch) {
    return arrayToPass.indexOf(numToSearch)
}
var arrayTosearch = ["1", "2", "3", "4", "5", "6" , 7 ,  "mariam"];
console.log(searchIndex(arrayTosearch, "3")); // ==> 2
console.log(searchIndex(arrayTosearch, "6")); // ==> 5
console.log(searchIndex(arrayTosearch, "8")); // ==> -1
console.log(searchIndex(arrayTosearch, "mariam")); // ==> 7
console.log(searchIndex(arrayTosearch, 7)); // ==> 6
console.log(searchIndex(arrayTosearch, "7")); // ==> -1 

