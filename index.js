import { Matrix } from 'sylvester-es6'


var M = new Matrix([
  [0,   0, 0],
  [10, 10, 0]
])

// Create a set of vertices for an object to draw.
var vertices = [ 1.0, 1.0, 0.0,
                -1.0, 1.0, 0.0,
                 1.0,-1.0, 0.0,
                -1.0,-1.0, 0.0 ]


// Create the canvas element.
var canvas = document.createElement('canvas')

// Append the canvas element to the document.
document.body.appendChild(canvas)

function init2dDraw (canvas) {
  canvas.width = 640
  canvas.height = 480
  canvas.style.border = "1px solid black"
  // Get the initial time.
  var t = Date.now()

  // Get a drawable context from the canvas.
  var ctx = canvas.getContext("2d")

  function draw () {
    function a_color () {
      return Math.round(Math.random() * 256).toString(16)
    }

    function drawStats () {

    }

    var d = 100
    for (var i = 0; i < d; i++)
      ctx.rect((canvas.width/d)*i+10, (canvas.width/3)+(100*Math.sin(i/2*Date.now()*Math.PI/180)), 3+i, 3+i*2)

    ctx.fill()
  }

  setInterval(draw, 200)
}

init2dDraw(canvas)
