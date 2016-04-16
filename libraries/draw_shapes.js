'use strict';

(function(){
  globalThing.shapeMaker = {
    drawCircle: function(x, y, radius, color){
      var context = globalThing.context
      console.log()
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

      context.stroke();
      context.fillStyle = color;
      context.fill();
    }
  }
})()
