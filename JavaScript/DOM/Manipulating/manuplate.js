const d = document.body;

let h1 = document.createElement('h1');

h1.innerHTML = "Hello from javascript";

document.body.appendChild(h1);

let div = document.createElement('div');

div.innerHTML = ` 
<img src= "https://images.unsplash.com/photo-1781813732632-9eda1c6a2775?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" width="400px">
`;

d.appendChild(div);

// --------------------------------------------------------------

let Fruits = document.getElementById('fruits');

let arr = ['kela', 'aam', 'sev', 'anngur', 'papita'];


arr.forEach(el => {
    let list = document.createElement('li');
    list.innerText = el;
    list.style.backgroundColor = 'aqua';
    list.style.margin = '10px';
    Fruits.appendChild(list);
});
