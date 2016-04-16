'use strict';

(function(){
  var BALL_PROTOTYPE = {
    move: function(){
      var acceleration =  {x:0.001, y:0.001}

      this.velocity.x += acceleration.x
      this.velocity.y += acceleration.y

      this.x += this.velocity.x
      this.y += this.velocity.y
    },

    draw: function() {
      globalThing.shapeMaker.drawCircle(this.x, this.y, this.radius, this.color);
    }
  }

  globalThing.Ball = {
    create: function(x, y, radius) {
      var ball = Object.create(BALL_PROTOTYPE)

      ball.x = 300
      ball.y = 300
      ball.velocity = {x:0, y: 0}
      ball.radius = radius || 20;
      var r = Math.floor(Math.random() * 255)
      var g = Math.floor(Math.random() * 255)
      var b = Math.floor(Math.random() * 255)

      ball.color = "rgba(" + r + ", " + g + ", " + b + ", 0.2)";

      return ball;
    }
  }

})()
