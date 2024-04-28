/* these are optional special variables which will change the system */
var systemBackgroundColor = "#D7D7D7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const White  = "#FFFFFF";
const strokeColor  = "#000000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let rectw = letterData["wsize"];
  let recth = letterData["hsize"];
  let x1 = 0 + letterData["offsetx1"];
  let y1 = 0 + letterData["offsety1"];
  let x2 = 0 + letterData["offsetx2"];
  let y2 = 0 + letterData["offsety2"];
  let x3 = 0 + letterData["offsetx3"];
  let y3 = 0 + letterData["offsety3"];
  let x4 = 0 + letterData["offsetx4"];
  let y4 = 0 + letterData["offsety4"];
  // let roangle1 = 0 + letterData["roangle1"];
  let rectX = 0 + letterData["offsetRECTX"];
  let rectY = 0 + letterData["offsetRECTY"];
  let colorVariablility = letterData["lerpColorAmt"]
  let myWhite = color("#FFFFFF")
  let myBlack = color("#000000")
  let fillRect = lerpColor(myWhite,myBlack,colorVariablility)

  // let colorVariablility = letterData["lerpColorAmt"]
  // let lineChange = letterData["lineHeight"]

  // let myGreen = color("#30dfc4")
  // let myPurple = color("#9b3fbf")

  // let fillSecondary = lerpColor(myGreen,myPurple,colorVariablility)

  
  // draw a line and a rect

  // angleMode(DEGREES);
  // rectMode(CENTER);
  

  
  fill(fillRect);
  strokeWeight(2.5);
  // push()
  // translate(lightGreenX, lightGreenY)
  // rotate(roangle1);
  
  rect(rectX, rectY, rectw, recth); //30,20
  
  
  strokeWeight(15);
  strokeCap(PROJECT);
  stroke(strokeColor);
  noFill();
  
  beginShape();
  vertex(x1,y1); //30, 20
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);

  endShape();

 
  

  // draw two circles
  // fill(darkGreen);
  // ellipse(0, 0, 50, 50);

  // fill(fillSecondary);
  // ellipse(lightGreenX, lightGreenY, size2, size2);
  
  // line(0-150/2,0,0-150/2,0-lineChange)
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
