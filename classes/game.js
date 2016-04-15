'use starict';

(function(){
  var GAME_PROTOTYPE = {
    start: function() {
      setInterval(this.tick.bind(this), 1000/600)
    },

    tick: function() {
      var canvas = globalThing.canvas

      globalThing.context.clearRect(0, 0, canvas.width, canvas.height)
      this.ball.move();
      this.ball.draw();

    }
  }

  globalThing.Game = {
    create: function () {
      var game = Object.create(GAME_PROTOTYPE);

      var location = {x: 300, y: 300};
      var velocity = {x: 0, y: 0};

      game.ball = globalThing.Ball.create(location, velocity, 20);

      return game;
    }
  }
})()
