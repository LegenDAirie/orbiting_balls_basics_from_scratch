'use strict';

(function(){
  var BALL_PROTOTYPE = {
    move: function() {
      var acceleration = {x: 0.001, y: 0.001}

      this.velocity.x += acceleration.x
      this.velocity.y += acceleration.y

      this.location.x += this.velocity.x
      this.location.y += this.velocity.y
    },

    draw: function () {
      globalThing.shapeMaker.drawCircle(this.location.x, this.location.y, this.radius, this.color)
    }
  }

  globalThing.Ball = {
    create: function(location, velocity, radius) {
      var ball = Object.create(BALL_PROTOTYPE);

      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);

      ball.color = "rgba(" + r + ", " + g + ", " + b + ", 0.2)";
      ball.location = location;
      ball.velocity = velocity;
      ball.radius = radius || 20;

      return ball;
    }
  }
})()
