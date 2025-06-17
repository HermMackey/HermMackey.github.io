////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
 let walker = {
    x: 1,
    y: 1,
    speedX: 0,
    speedY: 0
  };

 // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

// Game Item Objects
//  // one-time setup

  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  $(document).on('keydown', handleKeyDown)                         // change 'eventType' to the type of event you want to handle

   $(document).on('keyup', handleKeyUp);

  var KEY = {
  LEFT: 65,
  UP: 87,
  RIGHT: 68,
  DOWN: 83,
  ENTER: 13,
}
////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript

  by calling this function and executing the code inside.

  */
  function newFrame() {
     repositionGameItem();
     redrawGameItem ();
     wallCollision();
  }
  /* 
  Called in response to events.
  */

function handleKeyDown(event) {

  if (event.which === KEY.ENTER) {
    console.log("enter pressed");

  } else if (event.which === KEY.LEFT) {
    console.log("left pressed");

    walker.speedX = -5;
    } else if (event.which === KEY.RIGHT) {
    console.log("right pressed");

    walker.speedX = 5;

  } else if (event.which === KEY.DOWN) {
    console.log("down pressed");

    walker.speedY = 5;

  } else if (event.which === KEY.UP) {
    console.log("up pressed");

    walker.speedY = -5;

     console.log(event.which);
  } 
}

  let speedX = 0;
  let speedY = 0;
  function handleKeyUp(event) {

  if (event.key === "KEY.LEFT")
    console.log("left pressed")

    if (walker.speedX = 0);

    if (event.which === KEY.RIGHT)
    console.log("right pressed")

  if (walker.speedY = 0);

  if (event.which === KEY.DOWN)
    console.log("down pressed")

  if (walker.speedX = 0);

  if (event.which === KEY.UP)
    console.log("up pressed")

  if (walker.speedY = 0);

 } 

////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function endGame() {
    // stop the interval timer
    clearInterval(interval);
 setInterval(newFrame, 1000 / 60);

 // turn off event handlers
    $(document).off();
  }

function repositionGameItem() {
    walker.x = walker.x + walker.speedX;
    walker.y = walker.y + walker.speedY;
  }
  console.log(walker.x, walker.y);
  function redrawGameItem () {

    $("#walker").css("left", walker.x + "px");
    $("#walker").css ("top", walker.y + "px");
  }

  console.log("Walker position:", walker.x, walker.y);

  function wallCollision() {

    if (walker.x < 0) {
      walker.x = 0;

    } if (walker.y < 0) {
      walker.y = 0;
    }
    if (walker.x > $("#board").width() - $("#walker").width()) {
      walker.x = $("#board").width() - $("#walker").width ();
    }
     if (walker.y > $("#board").height() - $("walker").height()) {
      walker.y = $("#board").height() - $("#walker").height ();
     }
  }

   

 


