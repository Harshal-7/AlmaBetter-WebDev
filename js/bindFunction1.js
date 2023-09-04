// bind()
// Borrows a function and creates a copy. "this" keyword is replaced with the object passed as an argument

let name = {
    firstname : "Magnus",
    lastname : "Carlsen",
    printFullName : function(){
        console.log(this.firstname,this.lastname);  // this represent name so this.firstname = name.firstname
    }
}

name.printFullName();

let name2 = {
    firstname : "Vishy",
    lastname : "Anand",
}

// Function Borrowing
// we borrow function from another object and use it with the data of our object

name.printFullName.call(name2);

// Here in name object this.firstname = name2.firstname
// The object to be used as the current object.
// Calls a method of an object, substituting another object for the current object.