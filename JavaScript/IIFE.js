// The image provides a concise definition of an Immediately Invoked Function Expression (IIFE). Here are the key takeaways from the text:
// Definition: An IIFE is a JavaScript function that runs as soon as it is defined.
// Alternate Name: It is commonly referred to as a Self-Executing Anonymous Function.


(function(){
    console.log("This function call itself immeditely after declercation");
})();



(function(a,b){
 console.log("The mul of a and b: ",a*b);
}) (9,3);