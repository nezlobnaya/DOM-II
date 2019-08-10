// Your code goes here

//Mouseover


const logoHeading = document.querySelector('.logo-heading')
logoHeading.style.cursor = 'pointer'
logoHeading.addEventListener('mouseover', (event) => {
event.currentTarget.style.background = 'green'});

 //Keydown

// document.addEventListener('keydown', () => {
// const keyName = event.key;
// alert(`The key: ${keyName}`);
// }); 

   //wheel

const el = document.querySelector('.content-section');
el.addEventListener('wheel', () => {
event.preventDefault();
let scale = 1;
scale += event.deltaY * -0.01;
// Restrict scale
scale = Math.min(Math.max(.125, scale), 4);
// Apply scale transform
el.style.transform = `scale(${scale})`;
})

// drag / drop
const dragged = document.querySelector('.img-content')
dragged.addEventListener('drag', dragStart);
dragged.addEventListener('drop', dragDrop);
function dragStart() {
    console.log(`The image is dragged`)
}
function dragDrop() {
    console.log(`The image is dropped`)//couldn't figure out the drop
}


//load
window.addEventListener('load', function(event) {
    console.log('All resources finished loading!');
});

// //focus

const form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
event.target.style.background = "pink";    
}, true);
form.addEventListener("blur", function( event ) {
event.target.style.background = "";    
}, true);

//resize
window.addEventListener("resize", function() {
document.querySelector("body").style.backgroundColor = 'pink'
})

//scroll
document.addEventListener("scroll", function() {
console.log("Don't scroll!");
})

//select
const textOpacity = document.querySelectorAll('p');
textOpacity.forEach(item => item.addEventListener('select', function(event) {
event.target.style.opacity = '0.4';
}))




//dblclick
logoHeading.addEventListener('dblclick', (event) => {
event.target.style.fontSize = '100px';
console.log(logoHeading)
})

//click
const subscriber = document.querySelector('.destination .btn')
subscriber.addEventListener('click', (event) => {
    console.log('The person sing up for the "Fun In The Sun" vocation ')
})

//preventDefault
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link =>
link.addEventListener("click", e => {
e.preventDefault;
}));

//propagation

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
btn.addEventListener("click", e => {
// ====== Putting a stop to all propagation ========
e.stopPropagation();
e.target.style.border = "5px solid black";
});
});

