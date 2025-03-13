let btns = document.querySelectorAll("button");

let display = document.querySelector("input");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    console.log(btn.value);
    display.value += btn.value;
  });
}

let btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", function () {
  display.value = "";
});

let btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", function () {
  display.value = display.value.toString().slice(0, -1);
});

let btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", function () {
  display.value = eval(display.value * 100);
});
let btn4 = document.querySelector(".btn4");

btn4.addEventListener("click", function () {
  display.value = eval(display.value);
});
