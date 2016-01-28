// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match

function rightUp() {
  right();
  up();
}

down();
var square1 = getColor();
down();
var square2 = getColor();
down();
var square3 = getColor();
down();
var square4 = getColor();
down();
var square5 = getColor();
down();
var square6 = getColor();
down();
var square7 = getColor();
down();
var square8 = getColor();

down();
right();
setColor(square1);
right();
up();
setColor(square2);
rightUp();
setColor(square3);
rightUp();
setColor(square4);
rightUp();
setColor(square5);
rightUp();
setColor(square6);
rightUp();
setColor(square7);
rightUp();
setColor(square8);
rightUp();
up();
