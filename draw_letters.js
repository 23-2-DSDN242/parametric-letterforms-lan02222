/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  let size2 = letterData["size"];
  let lightGreenX = 0 + letterData["offsetx"];
  let lightGreenY = 0 + letterData["offsety"];
  let colorVariablility = letterData["lerpColorAmt"]
  let lineChange = letterData["lineHeight"]

  let myGreen = color("#30dfc4")
  let myPurple = color("#9b3fbf")

  let fillSecondary = lerpColor(myGreen,myPurple,colorVariablility)

  

  // draw two circles
  fill(darkGreen);
  ellipse(0, 0, 50, 50);

  fill(fillSecondary);
  ellipse(lightGreenX, lightGreenY, size2, size2);
  
  line(0-150/2,0,0-150/2,0-lineChange)
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
