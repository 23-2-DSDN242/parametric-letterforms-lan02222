const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 90,
  "offsetx": -20,
  "offsety": -100,
  "lerpColorAmt": 1,
  "lineHeight": 50,
  "edges": 20
}

const letterB = {
  "size": 50,
  "offsetx": -50,
  "offsety": -60,
  "lerpColorAmt": 0,
  "lineHeight": 80,
  "edges": 30
}

const letterC = {
  "size": 100,
  "offsetx": -30,
  "offsety": -30,
  "lerpColorAmt": 0,
  "lineHeight": 0,
  "edges": 50
}

const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

const midPurple = "#9b3fbf";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let lightGreenX = posx + letterData["offsetx"];
  let lightGreenY = posy + letterData["offsety"];
  let colorVariablility = letterData["lerpColorAmt"]
  let lineChange = letterData["lineHeight"]
  let edges = letterData["edges"]

  let myGreen = color("#30dfc4")
  let myPurple = color("#9b3fbf")

  let fillSecondary = lerpColor(myGreen,myPurple,colorVariablility)

  

  // draw two circles
  fill(darkGreen);
  // ellipse(posx, posy, 150, 150);
  square(posx, posy, 70, edges+10);

  fill(fillSecondary);
  // ellipse(lightGreenX, lightGreenY, size2, size2);
  square(lightGreenX, lightGreenY, size2, edges);

//   line(posx-150/2,posy,posx-150/2,posy-lineChange)
  square(posx-150/2, posy, lineChange, edges+20);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
