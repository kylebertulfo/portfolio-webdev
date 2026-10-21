
const image = document.getElementById("img1");
const input = document.getElementById("input1");
const btn1 = document.getElementById("b1");
const btn2 = document.getElementById("b2");
const profileCard = document.querySelector(".profile");

const nameText = document.getElementById("varvar1");
const statusText = document.getElementById("varvar3");

nameText.innerText = "Kyle Bertulfo";
statusText.innerText = "Welcome!";


image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.1)";
    statusText.innerText = "Hovering on profile image";
});

image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1)";
    statusText.innerText = "Mouse left the image";
});


input.addEventListener("input", function() {
    nameText.innerText = input.value || "Kyle Bertulfo";
    statusText.innerText = "Typing: " + input.value;
});

input.addEventListener("focus", function() {
    input.style.backgroundColor = "#fff8dc";
    statusText.innerText = "Input box selected";
});


btn1.addEventListener("click", function() {
    statusText.innerText = "You clicked the Button !";
});

btn2.addEventListener("dblclick", function() {
    statusText.innerText = "You double clicked the Button !";
});

profileCard.addEventListener("mouseover", function() {
    profileCard.style.boxShadow = "0 8px 16px BLACK";
    statusText.innerText = "Mouse inside form";
});

profileCard.addEventListener("mouseout", function() {
    profileCard.style.boxShadow = "none";
    statusText.innerText = "Mouse outside form";
});


const btn3 = document.getElementById("b3");


btn3.addEventListener("mousedown", function() {
    statusText.innerText = "You pressed the button!";
    btn3.style.backgroundColor = "darkorange"; 
});


btn3.addEventListener("mouseup", function() {
    statusText.innerText = "You unpressed the button!";
    btn3.style.backgroundColor = "cornflowerblue"; 
});