[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2

Font Name: SharpGlow

The main body of my font consists of a line and a rectangle. The auxiliary body part is divided into two groups, the first group is a long line, and the second group is a long line and a short line. Their color and line thickness are fixed. The auxiliary body part is controlled by the parameters of the main body. Through these values, the position and size of the body part can be controlled.

The three parameters per letter:
  * `wsize` : the width of the body rectangle
  * `hsize` : the length of the body rectangle
  * `offsetx1` : x1 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsety1` : y1 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsetx2` : x2 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsety2` : y2 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsetx3` : x3 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsety3` : y3 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsetx4` : x4 offset of the first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsety4` : y4 The first part of the line of the main body and the long section of one lines of the auxiliary body
  * `offsetRECTX` : y offset of the rectangle of the main body and the two lines of the secondary body
  * `offsetRECTY` : y offset of the rectangle of the main body and the two lines of the secondary body


Contents

step 1
My initial design was a few squares in different arrangements, with different rounded corners, which could become rounded at their roundest. I did a coding exercise based on my initial inspiration. I realized that I couldn't round the corners of the square to make it a circle, so I decided to change the design.


step 2
I made changes to my design, I changed the design elements squares to lines and rectangles. and completed the sketch of the letters.


step 3
According to the design sketch, I completed the coding of the letters. But the font looked too simple, so I made further sketches based on the current letters.


step 4
According to the design sketch, I completed the coding of the letters. But the font looked too simple, so I made further sketches based on the current letters.
I tried to improve my letter coding based on the updated sketch design, and I discovered serious problems. I have too many parameters, well over 20. I feel very upset. At first I thought about using rectangular blocks to replace the lines of the main body, but then I remembered the ‘Draw Target’ function taught in class. Luckily, the draw target feature allowed me to reduce my parameters significantly and make them just a little different from my sketched design.
