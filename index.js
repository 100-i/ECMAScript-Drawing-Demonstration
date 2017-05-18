import { Matrix } from 'sylvester-es6'

// Add tau to simplify some expressions
var TAU = 2 * Math.PI

document.body.style.textAlign = "center"

// Create a title at the head of the document
var header = document.createElement('h1')
header.innerHTML = 'ECMAScript Drawing Demonstration'
document.body.appendChild(header)

document.body.appendChild(document.createElement('hr'))


// Create the canvas element.
var canvas = document.createElement('canvas')

// Append the canvas element to the document.
document.body.appendChild(canvas)

function init2dDraw (canvas) {
  canvas.width = document.body.clientWidth
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

    var s = 6

    function createShape(origin) {
      var p = Math.round(Math.random() * 64)
      var r = 12
        for (var i = 1; i < p+1; i++) {
          ctx.beginPath()
          ctx.moveTo(origin[0], origin[1])
          ctx.lineTo(origin[0]+r*Math.cos(i*TAU/p), origin[1]+r*Math.sin(i*TAU/p))
          ctx.stroke()
        }
    }

    var o = [[12,32], [64, 32]]

    for (var i = 0; i < 2; i++) {
      createShape([Math.random()*canvas.width, Math.random()*canvas.height])
    }

    ctx.fill()
  }

  setInterval(draw, 100)
}

init2dDraw(canvas)
