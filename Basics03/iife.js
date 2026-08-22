//IIFE: Immediately Invoked Function Expressions

//To avoid pollution of global scope variables and other declarations, we use IIFY
//NORMAL FUNCTION
function chai() { 
    console.log(`DB CONNECTED`)
}
chai();   //";" IS IMPORTANT HERE: to separate both functions


//IIFE FUNCTION :UPDATED THE NORMAL FUNCTION
//THIS IS NAMED IIFE: chai() is the name of IIFE
(function chai() { 
    console.log(`DB CONNECTED`)
})();
//Wrapping a function in parenthesis: function declaration, another () : function call


( () => {                    //IIFE also works for ARROW FUNCTIONS
    console.log(`DB CONNECTED TWO`)
})(); 


//UNNAMED IIFE
( (NAME) => {               //IIFE also works for STRING INTERPOLATION
    console.log(`DB CONNECTED TWO ${NAME}`)    //Here "NAME" is parameter and "SIMRAN" is value 
})('SIMRAN') 