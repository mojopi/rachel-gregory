// function makeBlueColor() {
//     return Math.floor(Math.random() * 10) + "," +
//         Math.floor(Math.random() * 10) + "," + Math.floor(200 + Math.random() * 100) + "," + (Math.random() + 0.4);;
//     console.log(makeColor())

// };

// function setBackgroundColor() {
//     var x = document.getElementById('a')
//     x.style.backgroundColor = "rgba(" + makeBlueColor() + ")";
//     setInterval(makeBlueColor(), 500);
// };

// setInterval(setBackgroundColor, 500);

// var squid = document.getElementById('squid');

// function squidOpacity() {
//     squid.style.opacity = (0.6 + Math.random());

// };

// setInterval(squidOpacity, 500);

// function squidPosition() {
//     squid.style.top = Math.floor(Math.random() * 100) + "px";
// };

// setInterval(squidPosition, 400);

// var container = document.getElementById("container");


// function makeDots() {
//     var circle = document.createElement("div");
//     z.appendChild(circle);
//     z.appendChild(circle);

//     circle.style.width = "4px";
//     circle.style.height = "4px";
//     circle.style.borderRadius = "50%";
//     circle.style.position = "relative";
//     circle.style.zIndex = 1;



//     function setDotPositionColor() {
//         circle.style.backgroundColor = "rgb(" +
//             Math.floor(Math.random() * 256) + "," +
//             Math.floor(Math.random() * 10) + "," +
//             Math.floor(Math.random() * 10) +

//             ")";



//         circle.style.left = Math.floor(Math.random() * 100) + "px";

//         circle.style.top = Math.floor(Math.random() * 100) + "px";

//     }
//     setInterval(setDotPositionColor, 300);


// };

// var i;
// for (i = 0; i < 50; i = i + 1) { makeDots() }