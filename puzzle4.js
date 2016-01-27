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

function twoDown() {
  down();
  down();
}

function downThree(total) {
  var times = 0;
  while (times < total) {
    down();
    times = times + 1;
  }
}


twoDown();
twoDown();
right();
var color = getColor(color);
down();
setColor(color);
right();
right();
right();
up();
var secondColor = getColor(secondColor);
down();
setColor(secondColor);
right();
right();
