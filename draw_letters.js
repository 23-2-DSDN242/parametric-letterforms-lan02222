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
  let rectX = 0 + letterData["offsetRECTX"];
  let rectY = 0 + letterData["offsetRECTY"];
  let lightgreen = color("#d7e120") 
  let rangle;  


  
  // //----------------


  fill(lightgreen);//fillRect
  noStroke();
  rect(rectX, rectY, rectw, recth);


  
  if (rectw < 30 ) {
    rangle = 90;  
  } else {
    rangle = 0;
  }




  angleMode(DEGREES);
  push()
  translate(rectX+9, rectY)
  rotate(rangle);
    drawTarget(0, 0);
  pop()

  function drawTarget(x,y){
  strokeWeight(5);
  strokeCap(PROJECT);
  stroke(strokeColor);
  noFill();


  line(x+19,y+6,x+20,y+6);    
  line(x-2,y+6,x+10,y+6);  




  }




  


  drawTarget1(x1, y1, x2, y2, x3, y3, x4, y4,)
  
  function drawTarget1(tx1,ty1,tx2,ty2,tx3,ty3,tx4,ty4){
    stroke(strokeColor);
    strokeWeight(22);
    strokeCap(PROJECT);
    noFill();
    
    beginShape();
    vertex(tx1, ty1); //30, 20
    vertex(tx2, ty2);
    vertex(tx3, ty3);
    vertex(tx4, ty4);
  
    endShape();


    stroke(lightgreen);
    strokeWeight(6);
    strokeCap(PROJECT);
    noFill();
    
    beginShape();
    vertex(tx1-3.5, ty1-19); //30, 20
    vertex(tx2-3.5, ty2-19);
    vertex(tx3-3.5, ty3-19);
    vertex(tx4-3.5, ty4-19);
  
    endShape();

  }

 


  }  







function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  if (percent < 50 ) {
    new_letter["hsize"] = map(percent, 0, 50, oldObj["hsize"], 30);
  } else {
    new_letter["hsize"] = map(percent, 50, 100, 30, newObj["hsize"]);
  }

  new_letter["wsize"]    = map(percent, 0, 100, oldObj["wsize"], newObj["wsize"]); //if change this size, it will change the small black lines rotate
  // new_letter["hsize"] = map(percent, 0, 100, oldObj["hsize"], newObj["hsize"]);

  if (percent < 50 ) {
    new_letter["offsetx1"] = map(percent, 0, 50, oldObj["offsetx1"], 10);
  } else {
    new_letter["offsetx1"] = map(percent, 50, 100, 50, newObj["offsetx1"]);
  }
  // new_letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);

  if (percent < 50 ) {
    new_letter["offsety1"] = map(percent, 0, 50, oldObj["offsety1"], 20);
  } else {
    new_letter["offsety1"] = map(percent, 50, 100, 30, newObj["offsety1"]);
  }



  if (percent < 50 ) {
    new_letter["offsetx2"] = map(percent, 0, 50, oldObj["offsetx2"], 10);
  } else {
    new_letter["offsetx2"] = map(percent, 50, 100, 50, newObj["offsetx2"]);
  }  


  if (percent < 50 ) {
    new_letter["offsety2"] = map(percent, 0, 50, oldObj["offsety2"], 20);
  } else {
    new_letter["offsety2"] = map(percent, 50, 100, 30, newObj["offsety2"]);
  }



  if (percent < 50 ) {
    new_letter["offsetx3"] = map(percent, 0, 50, oldObj["offsetx3"], 10);
  } else {
    new_letter["offsetx3"] = map(percent, 50, 100, 50, newObj["offsetx3"]);
  }


  if (percent < 50 ) {
    new_letter["offsety3"] = map(percent, 0, 50, oldObj["offsety3"], 20);
  } else {
    new_letter["offsety3"] = map(percent, 50, 100, 30, newObj["offsety3"]);
  }


  if (percent < 50 ) {
    new_letter["offsetx4"] = map(percent, 0, 50, oldObj["offsetx4"], 10);
  } else {
    new_letter["offsetx4"] = map(percent, 50, 100, 50, newObj["offsetx4"]);
  }

  if (percent < 50 ) {
    new_letter["offsety4"] = map(percent, 0, 50, oldObj["offsety4"], 20);
  } else {
    new_letter["offsety4"] = map(percent, 50, 100, 30, newObj["offsety4"]);
  }

  if (percent < 50 ) {
    new_letter["offsetRECTX"] = map(percent, 0, 50, oldObj["offsetRECTX"], 5);
  } else {
    new_letter["offsetRECTX"] = map(percent, 50, 100, 20, newObj["offsetRECTX"]);
  }

  if (percent < 50 ) {
    new_letter["offsetRECTY"] = map(percent, 0, 50, oldObj["offsetRECTY"], 20);
  } else {
    new_letter["offsetRECTY"] = map(percent, 50, 100, 20, newObj["offsetRECTY"]);
  }


  // new_letter["offsetRECTX"] = map(percent, 0, 100, oldObj["offsetRECTX"], newObj["offsetRECTX"]);
  // new_letter["offsetRECTY"] = map(percent, 0, 100, oldObj["offsetRECTY"], newObj["offsetRECTY"]);
  // new_letter["lerpColorAmt"] = map(percent, 0, 100, oldObj["lerpColorAmt"], newObj["lerpColorAmt"]);
  

  return new_letter;
}

var swapWords = [
  "SHARPGLOW",
  "CONTINUE",
  "THINKING"
]
