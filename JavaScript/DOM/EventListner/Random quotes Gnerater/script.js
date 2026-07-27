VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: 0x7192f,
    backgroundAlpha: 1.00,
    color1: 0xff0000,
    color2: 0x2575fc,
    colorMode: "lerpGradient",
    birdSize: 1.20,
    wingSpan: 25.00,
    speedLimit: 4.00,
    separation: 40.00,
    alignment: 20.00,
    cohesion: 20.00,
    quantity: 3.00
});

const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    createdBy: "Walt Disney",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    createdBy: "Winston Churchill",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    createdBy: "Sam Levenson",
  },
  {
    quote: "Dream big and dare to fail.",
    createdBy: "Norman Vaughan",
  },
  {
    quote: "The future depends on what you do today.",
    createdBy: "Mahatma Gandhi",
  },
  {
    quote: "It always seems impossible until it's done.",
    createdBy: "Nelson Mandela",
  },
  {
    quote: "Believe you can and you're halfway there.",
    createdBy: "Theodore Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    createdBy: "Eleanor Roosevelt",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    createdBy: "Steve Jobs",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    createdBy: "Chris Grosser",
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    createdBy: "Franklin D. Roosevelt",
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    createdBy: "C.S. Lewis",
  },
  {
    quote: "If you can dream it, you can do it.",
    createdBy: "Walt Disney",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    createdBy: "Mark Twain",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear.",
    createdBy: "George Addair",
  },
  {
    quote: "Small steps every day lead to big results.",
    createdBy: "Unknown",
  },
  {
    quote: "Discipline is choosing between what you want now and what you want most.",
    createdBy: "Abraham Lincoln (attributed)",
  },
  {
    quote: "Great things never come from comfort zones.",
    createdBy: "Unknown",
  },
  {
    quote: "Don't limit your challenges. Challenge your limits.",
    createdBy: "Jerry Dunn",
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    createdBy: "Henry David Thoreau",
  },
];


let box = document.querySelector('#Quotes');
let p = document.querySelector('p');
let h2 = document.querySelector('h2');
let btn = document.querySelector('button');

let randomIndex;

btn.addEventListener('click', () => {

    randomIndex = Math.floor(Math.random() * quotes.length);

    p.innerText = `${quotes[randomIndex].quote}`;
    h2.innerText = `${quotes[randomIndex].createdBy}`;
});


box.addEventListener('mousemove' , () => {
 box.style.backgroundColor = "white";
});
box.addEventListener('mouseleave' , () => {
 box.style.backgroundColor = "#F2E4D1";
});