'use strict';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

globalThing.canvas = document.getElementById('canvas');

globalThing.canvas.setAttribute('width', WIDTH);
globalThing.canvas.setAttribute('height', HEIGHT);

globalThing.context = canvas.getContext('2d');

var game = globalThing.Game.create()
game.start()
