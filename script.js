const btn = document.getElementById("btn");
const input = document.getElementById("colors");
btn.addEventListener("click", function () {
  const bgColorBtn = getComputedStyle(btn).backgroundColor;
  btn.parentElement.parentElement.parentElement.style.backgroundColor =
    bgColorBtn;
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  // btn.style.backgroundColor=`rgb(${red},${green},${blue})`;
  btn.style.backgroundColor = input.value;
});
