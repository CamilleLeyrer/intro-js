// jQuery exposes the $ operator to access all jQuery methods.
// It is in fact an alias for the jQuery object, but in this
// case the shorter the better.

// We wrap the whole code in the .ready() method to make sure the DOM is
// fully loaded once we start interacting with it.
$(document).ready(function () {
    
  // Uncomment for step-by-step execution.
  // debugger;

  // From Ex1.
  // We can chain methods in jQuery.
  $(".myClass-0-1").html("jQuery is <em>easy</em>.<br/><br/>");
  // The text is there but small. Let's make it bigger.
  $(".myClass-0-1").css({ "font-size": "40px" });
  ///////////////////////////////////////////////

  // You can change multiple attributes at once.

  // Let sets the left and top margin to a percentage.
  // Let's use the parent div's (myClass-0) to position all children.
  $(".myClass-0").css({
    "margin-left": "20%",
    "margin-right": "20%",
  });

  // Let's add some texts to some divs.
  $(".myClass-0-3").html("Some text.");

  // Let's make it less boring with some animation.

  // We can add the 'transition' property to tell the browser
  // to make the requested change happen gradually.

  // You can also us the ID of the div: $('#ID_NAME').
  // We are moving the first children.
  $("#myID-0-1").css({
    transition: "1s",
    "margin-left": "33%",
    "margin-top": "10%",
  });

  // Checkpoint.
  // The first children shifted at a lower on the screen, but also
  // all remaning children have been shifted below. Why?
  // Because the HTML structure imposes them be rendered after the
  // first div (it can overwritten by other CSS rules).

  // Exercise
  ////////////

  // Add a transition for divs with class name: myClass-0-3
  // The transition will be effective for _all_ properties that
  // you specify.
  // Hint: try 'background-color', 'color', and 'font-size';

  // Solution.
  // Add some fun attributes to your text.
  $(".myClass-0-3").css({
    transition: "1s",
    "background-color": "black",
    color: "white",
    "font-size": "30px",
    "margin-bottom": "5px",
    padding: "10px",
  });

});
