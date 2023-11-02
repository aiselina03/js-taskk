// const mydiv = document.getElementById("myDiv");
// const myDivSecond = document.querySelector("#myDivSecond");
// const list = document.querySelector("ul > .list");
// const listwithquery = document.querySelectorAll(".list");

// console.log(mydiv);
// console.log(myDivSecond);
// console.log(list);
// console.log(listwithquery);

// const box = document.querySelector(".box");
// box.innerHTML = "necesen";
// console.log(box);

// const ul = document.querySelectorAll(".siyahi li");
// for (let i = 0; i < ul.length; i++) {
//     ul[i].textContent="salam"
// }// ul.forEach(x=>x.textContent="salam")

// const container = document.getElementById("container");
// const div = document.createElement("div");
// div.textContent = "hello Aysel";
// div.classList.add("list");
// container.append(div);
// console.log(div);

//?tas1
// let button = document.querySelector(".btn");
// button.addEventListener("click", function () {
//   alert("hello");
// });
// button.style.backgroundColor = "pink";
// button.style.color = "white";
// button.style.borderColor = "pink";
// button.style.border = "3px solid pink";
// button.style.padding = "15px";
// button.style.borderRadius = "10px";
// button.style.fontSize="20px"

//?task2
// let button = document.querySelector(".btn1");
// button.addEventListener("click", function () {
//   alert(button.textContent);
// });
// button.style.backgroundColor = "pink";
// button.style.color = "white";
// button.style.borderColor = "pink";
// button.style.border = "3px solid pink";
// button.style.padding = "15px";
// button.style.borderRadius = "10px";
// button.style.fontSize = "20px";

//?task3
// let button = document.querySelector(".btn2");
// button.addEventListener("click", function () {
//   const yaratdigim = document.createElement("div");
// //const body = document.querySelector("body");
// //yuxaridaki kimi yazsaq document ehtiyac yoxdu
//   document.body.append(yaratdigim);
//   yaratdigim.textContent = "Hello";
// });
// button.style.backgroundColor = "pink";
// button.style.color = "white";
// button.style.borderColor = "pink";
// button.style.border = "3px solid pink";
// button.style.padding = "15px";
// button.style.borderRadius = "10px";
// button.style.fontSize = "20px";

//?task4
// let listelement = document.querySelectorAll("ul li");
//     for (let i = 0; i < listelement.length; i++) {
//        listelement[i].addEventListener("click", function(){
//         console.log(listelement[i].textContent);
//     }
// )}

//?task5
// let listelement = document.querySelectorAll("ul li");
// for (let i = 0; i < listelement.length; i++) {
//   listelement[i].addEventListener("click", function () {
//     listelement[i].classList.toggle("pink");
//   });
// }

//?task6
// let listelement = document.querySelectorAll("ul li");
// for (let i = 0; i < listelement.length; i++) {
//   listelement[i].addEventListener("click", function () {
//     listelement[i].remove();
//   });
// }

//?task7
// let inputColor = document.getElementById("color");
// let inputWidth = document.getElementById("width");
// let button = document.querySelector(".btn");
// let figure = document.querySelector(".figure");

// button.addEventListener("click", function () {
//   if (inputColor.value == "" || inputWidth.value == "") {
//     alert("inputlari doldurun.");
//   }
//   figure.style.backgroundColor = inputColor.value;
//   figure.style.width = inputWidth.value + "px";
// });

//?qeydler
//getelementbyid id olanda secilir 1dene ozun qaytarir
//queryselector id--#qoyulur class--.qoyulur 1dene ozun qaytarir (css kimi yazilir)
//queryselectorall -- node list qaytarir
//qalanlar html collection qaytarir

//.textContent
//.innerHTML kod qebul edir

//.append()  elave edir
//.createElement() element yaradir
//.classList.add() class deyeri elave edir
//.classList.remove() class deyerini silir
//delete
//.remove
//.setAttribute()
//.getAttribute()
//.addEventListener
