function CreateArray() {

    const arr = [];

    return {
        push(ele){
            arr.push(ele);
        },

        getElement(index){
            if(index >= arr.length){
                return 'Not found';
            }

            return arr[index];
        },

        getArray(){
            return arr;
        }
    };
}

const newArray= CreateArray();


newArray.push(10);
newArray.push(20);
newArray.push(30);
newArray.push(40);
newArray.push(50);


console.log(newArray.getElement(0));
console.log(newArray.getElement(42));
console.log(newArray.getElement(2));
console.log(newArray.getElement(2));
console.log(newArray.getElement(4));

console.log(newArray.getArray());



