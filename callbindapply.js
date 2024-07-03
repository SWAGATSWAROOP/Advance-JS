let name = {
  firstname: "Swagat",
  lastname: "Parida",
  printFullName: function () {
    console.log(`firstname : ${this.firstname}, lastname: ${this.lastname}`);
  },
};

let printFullName = function (hometown, state) {
  console.log(
    `firstname : ${this.firstname}, lastname: ${this.lastname} hometown : ${hometown} State : ${state}`
  );
};

let name2 = {
  firstname: "Aryan",
  lastname: "Parida",
};

name.printFullName();

// Now we want to call printFullName method on name2 one method that copy from above another method is that use call method
// Call method help us to borrow function

name.printFullName.call(name2); //Function borrowing and every method has call method to it

function add(a, b) {
  console.log(a + b);
}

// Using printFullName outside the object
printFullName.call(name2, "Cuttuck", "Odisha"); //First one will be refernce followed by args

// Call method without this
let a = 1,
  b = 2;
add(1, 2);
add.call(1, 2);

// Apply method
// The only differnce is that how we pass arguments

printFullName.apply(name2, ["New Delhi", "Delhi"]); //is list of arguments passed in func

// Bind method
let print = printFullName.bind(name2, "Mumbai", "Maharashtra"); //Returns a function that binds the following data to it

print(); //This is the function
