let output = document.querySelector("#output");
let colorCode = document.querySelector("#colorCode");
let outputBtn = document.querySelector("#outputBtn");

const colorChange = () => {
  let r_value = Math.floor(Math.random() * 256);
  let g_value = Math.floor(Math.random() * 256);
  let b_value = Math.floor(Math.random() * 256);

  let randomColor = `rgb(${r_value}, ${g_value}, ${b_value})`;

  output.style.backgroundColor = randomColor;

  colorCode.textContent = randomColor;
};

outputBtn.addEventListener("click", colorChange);
