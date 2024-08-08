const inputField = document.getElementById("inputField");
const inputBtn = document.getElementById("inputBtn");
const output = document.getElementById("output");

const reverse = function (s) {
  return s.split("").reverse().join("");
};

const getBinary = function () {
  const binary = Number(inputField.value);
  inputField.value = "";

  return binary;
};

const bintodec = function () {
  let bin = getBinary();
  let dec = 0,
    n,
    ind = 0;

  console.log(typeof bin);
  console.log(bin);

  while (bin != 0) {
    n = bin % 10;
    dec = dec + n * 2 ** ind;
    bin = Math.floor(bin / 10);
    ind++;
  }

  console.log(dec);

  return dec;
};

const dectohex = function () {
  let dec = bintodec();
  let rem,
    quo,
    hex = "";

  while (dec > 0) {
    quo = Math.floor(dec / 16);
    rem = dec % 16;
    if (rem === 10) rem = "A";
    else if (rem === 11) rem = "B";
    else if (rem === 12) rem = "C";
    else if (rem === 13) rem = "D";
    else if (rem === 14) rem = "E";
    else if (rem === 15) rem = "F";
    else if (rem < 10) rem = rem;

    hex = hex + rem;

    dec = quo;
  }

  hex = reverse(hex);

  console.log(hex);

  output.innerText = hex;
};

inputBtn.addEventListener("click", dectohex);
