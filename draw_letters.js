/* these are optional special variables which will change the system */
var systemBackgroundColor = "#FFFFFF"; //#D7D7D7
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
  // let myWhite = color("#FFFFFF")
  // let myBlack = color("#000000")  
  // let colorVariablility = letterData["lerpColorAmt"];
  // let fillRect = lerpColor(myWhite,myBlack,colorVariablility)
  let lightgreen = color("#d7e120") 
  let xc1 = letterData["offsetxc1"];
  let yc1 = letterData["offsetyc1"];
  let xc2 = letterData["offsetxc2"];
  let yc2 = letterData["offsetyc2"];
  let xc3 = letterData["offsetxc3"];
  let yc3 = letterData["offsetyc3"];
  let xc4 = letterData["offsetxc4"];
  let yc4 = letterData["offsetyc4"];

  let tw1 = letterData["topw1"];
  let ty1 = letterData["topy1"];
  
  // let colorVariablility = letterData["lerpColorAmt"]
  // let lineChange = letterData["lineHeight"]

  // let myGreen = color("#30dfc4")
  // let myPurple = color("#9b3fbf")

  // let fillSecondary = lerpColor(myGreen,myPurple,colorVariablility)

  
  // draw a line and a rect

  // angleMode(DEGREES);
  // rectMode(CENTER);
  

  
  strokeWeight(15);
  strokeCap(PROJECT);
  stroke(strokeColor);
  noFill();
  
  beginShape();
  vertex(x1, y1); //30, 20
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);

  endShape();

  // draw decoration - outer contour
  // stroke(darkGreen);
  // strokeWeight(5);
  // strokeCap(PROJECT);
  // noFill();
  
  // beginShape();
  // vertex(xc1,yc1); //30, 20
  // vertex(xc2, yc2);
  // vertex(xc3, yc3);
  // vertex(xc4, yc4);

  // endShape();
  
  // draw decoration -  draw line
  // stroke(strokeColor);
  // line(xl1, yl1, xl2, yl2);

  // draw decoration -  draw square
  // fill(strokeColor),
  // square(squX, squY, 2);

  //----------------
  
  fill(lightgreen);//fillRect
  noStroke();
  drawTarget(rectX, rectY, rectw, recth)
  
  

  function drawTarget(x,y,w,h){
  rect(x,y,w,h);
  fill(strokeColor),

  strokeWeight(5);
  stroke(strokeColor);
  line(x+19,y+6,x+20,y+6);    
  line(x-2,y+6,x+10,y+6);  


  // stroke(lightgreen);

  // strokeWeight(5);
  // strokeCap(PROJECT);
  // noFill();
  
  // beginShape();
  // vertex(xc1,yc1); //30, 20
  // vertex(xc2, yc2);
  // vertex(xc3, yc3);
  // vertex(xc4, yc4);

  // endShape();

  }

  //test
  // drawTarget1(18, ty1, tw1, 10);
  
  // function drawTarget1(x,y,w,h){
  // fill(strokeColor);
  // rect(x,y,w,h); //15,50,50,15

  // strokeWeight(5);
  // stroke(lightgreen);
  // line(x,y-12,x+w-10,y-12);   

  // rect(15,50,15,105); //15,50,15,105
  // rect(84,50,15,105); //84,50,15,105
  // rect(15,140,50,15); //15,140,50,15

  }  



  // draw two circles
  // fill(darkGreen);
  // ellipse(0, 0, 50, 50);

  // fill(fillSecondary);
  // ellipse(lightGreenX, lightGreenY, size2, size2);
  
  // line(0-150/2,0,0-150/2,0-lineChange)



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["wsize"]    = map(percent, 0, 100, oldObj["wsize"], newObj["wsize"]);
  new_letter["hsize"] = map(percent, 0, 100, oldObj["hsize"], newObj["hsize"]);
  new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
  new_letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  new_letter["offsetRECTX"] = map(percent, 0, 100, oldObj["offsetRECTX"], newObj["offsetRECTX"]);
  new_letter["offsetRECTY"] = map(percent, 0, 100, oldObj["offsetRECTY"], newObj["offsetRECTY"]);
  new_letter["lerpColorAmt"] = map(percent, 0, 100, oldObj["lerpColorAmt"], newObj["lerpColorAmt"]);
  

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
