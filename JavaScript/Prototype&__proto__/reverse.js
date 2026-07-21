
// let ReverseString = {
    
//     reverse : function(key) {

//     let rev = this[key];;
//     let ans = "";
    
//         for(let i = rev.length -1; i >= 0; i--){
//             ans+=rev[i];

//         }

//         console.log(ans);

//     }
// }



// let std1 = {
//     name: 'Sunny',
//     email:'sunny1234@gmail.com',
//     __proto__: ReverseString

// };
// let std2 = {
//     name: 'Sudhanshu',
//     __proto__: std1

// };
// let std3 = {
//     name: 'Laxman',
//      __proto__: std1


// };
// let std4 = {
//     name: 'Tushar',
//      __proto__: std1


// };


// console.log("------------name----------------");
// std1.reverse("name");
// std2.reverse("name");
// std3.reverse("name");
// std4.reverse("name");


// console.log("------------email----------------");
// std1.reverse("email");
// std2.reverse("email");
// std3.reverse("email");
// std4.reverse("email");

String.prototype.ReverseString = function(){

    let rev = "";
    for (let i = this.length - 1; i >= 0; i--) {
        rev += this[i];
        
    }

    console.log(rev);
}

let n1 = "tushar";
let n2= "sunny";
let n3 = "sudhanshu";
let n4 = "laxman";
let n5 = "racecaR";

n1.ReverseString();
n2.ReverseString();
n3.ReverseString();
n4.ReverseString();
n5.ReverseString();