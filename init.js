'use strict';

globalThing.canvas = document.getElementById('canvas');

globalThing.canvas.setAttribute('width', window.innerWidth);
globalThing.canvas.setAttribute('height', window.innerHeight);

globalThing.context = globalThing.canvas.getContext('2d');

var game = globalThing.Game.create();
game.start();
