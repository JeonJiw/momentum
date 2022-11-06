const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const body = document.querySelector("body");
const chosenImg = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(img/${chosenImg})`;
//const bgImage = document.createElement("img");
//bgImage.class = "image";
//bgImage.src = `img/${chosenImg}`;

//document.body.appendChild(bgImage);
