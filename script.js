// RGB Colors

// Variables to store HTML Elements

let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStrOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let widthInEl = document.getElementById("width");
let heightInEl = document.getElementById("height");

// Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);
widthInEl.addEventListener("input", changeSize);
heightInEl.addEventListener("input", changeSize);

// Event Function
function rgbPreview() {
  // Input: get red, green, blue values
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  // Vallidate colors (Constrain colors between 0 -255)
  //   Check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }

  //   Check gValue
  if (gValue < 0) {
    gValue = 0;
    greenInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  //   Check bValue
  if (bValue < 0) {
    bValue = 0;
    blueInEl.value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    blueInEl.value = 255;
  }

  //   Process: build rgb string: rgb(___, ___, ___)
  let rgbString = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";

  //   Output: display rgb string and update the color preview
  rgbStrOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

// Event Function
function changeSize() {
  // Input: width and height
  let wValue = +widthInEl.value;
  let hValue = +heightInEl.value;

  //   Validate size (Constrain numbers between 0 and 200/400)
  // Check wValue
  if (wValue < 50) {
    wValue = 50;
    widthInEl.value = 50;
  } else if (wValue > 400) {
    wValue = 400;
    widthInEl.value = 400;
  }

  //   Check hValue
  if (hValue < 50) {
    hValue = 50;
    heightInEl.value = 50;
  } else if (hValue > 200) {
    hValue = 200;
    heightInEl.value = 200;
  }

  //   Process: build size strings (___px)
  let wString = wValue + "px";
  let hString = hValue + "px";

  // Output: change size of display window
  displayEl.style.width = wString;
  displayEl.style.height = hString;
}
