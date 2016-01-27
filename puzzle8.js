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

//Why does betty++ keep looping?
function downDotty() {
  var betty = 0;
  
  while (betty < 8) {
    down();
    betty += 1;
  }
}

function upDotty() {
  var butter = 0;
  
  while (butter < 7) {
    up();
    butter += 1;
  }
}

function rightTwice() {
  right();
  right();
}

function downPoppy() {
  var i = 0;
  
  while (i < 7) {
    down();
    i += 1;
  }
}

downDotty();
rightTwice();
upDotty();
rightTwice();
downPoppy();
rightTwice();
upDotty();
rightTwice();
downPoppy();
right();
