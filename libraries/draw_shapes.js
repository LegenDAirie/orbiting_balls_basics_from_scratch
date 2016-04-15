'use strict';

(function(){
  globalThing.shapeMaker = {
    drawCircle: function(x, y, radius, color) {
      var context = globalThing.context
      context.beginPath();
      context.strokeWidth = 2;

      context.arc(
        x,
        y,
        radius,
        0,
        2 * Math.PI,
        false
      )

      context.fillStyle = color;
      context.stroke();
      context.fill();
    }
  }
})()
