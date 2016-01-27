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

function downDot() {
  var square = getColor();
  
  
  while (getColor() == square) {
    down();
  }
  
  if (getColor() == "red") {
    right();
    right();
  }
}

function upDot() {
  var color = getColor();
  
  while (getColor() == color) {
    up();
  }
  
  if (getColor() == "red") {
    right();
    right();
  }
}

function finalDown() {
  var betty = getColor();
  
  while (getColor() == betty) {
    down();
  }
  
  if (getColor() == "red") {
    right();
  }
}

downDot();
upDot();
downDot();
upDot();
finalDown();
