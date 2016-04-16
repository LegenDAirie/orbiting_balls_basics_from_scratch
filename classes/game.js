'use strict';

(function(){
  var GAME_PROTOTYPE = {
    start: function() {
      setInterval(this.tick.bind(this), 1000/60)

    },

    tick: function() {
      var canvas = globalThing.canvas
      var context = globalThing.context
      context.clearRect(0, 0, canvas.width, canvas.height)
      this.ball.move();
      this.ball.draw();
    }

  }

  globalThing.Game = {
    create: function() {
      var game = Object.create(GAME_PROTOTYPE);

      game.ball = globalThing.Ball.create();
      return game;
    }
  }

})()
