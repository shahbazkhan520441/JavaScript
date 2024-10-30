// function  ability of a function to use as value and passed as an argument to another function and return function from the function this abilty is know as first class function 
// abilty to se as values
// it is also called as first class citizens

var b = function(parm1,parm2) {// parmaeters
 
    return function(){
        console.log("inner function")
    }

}


var c=b(10,20)

c()

