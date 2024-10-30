// function statement or fuction declaration
function a(){
    console.log(" a called")
}

// function expression
var b = function(){
    console.log('b called')

}

b()
a()

// named function expression 

var b = function xyz(){
    console.log('b called')

}

//  differnce between parameters nand arguments 

var b = function(parm1,parm2) {// parmaeters
    console.log('b called')

}

b(12,10)// arguments 

//  we cn pass function as an argument to another function

function xyz(){

}

b(xyz)


//  we canreturn function froma function 

var b = function(parm1,parm2) {// parmaeters
 
    return function(){
        console.log("inner function")
    }

}


var c=b(10,20)

c()


