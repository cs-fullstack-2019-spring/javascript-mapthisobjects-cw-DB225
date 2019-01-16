//Use .map to create a new array of objects where each object has a property for petnumber and pettype based on the elements in the array. Print the new array of objects.
// let arr = ["dog", "cat", "pig", "hamster"];
// let pet_objects = []; // new array to hold objects

let arr = ["dog", "cat", "pig", "hamster"];
let objArr =  arr.map(function(petnumber, pettype){
    let pet_objects = [];
    pet_objects.petnumber = petnumber;
    pet_objects.pettype = pettype;
    return pet_objects;
})
console.log(objArr);