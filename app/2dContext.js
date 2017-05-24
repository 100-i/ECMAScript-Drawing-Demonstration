// Add tau to simplify some expressions
var TAU = 2 * Math.PI

export function init2dDraw (canvas) {
  canvas.width = document.body.clientWidth
  canvas.height = 480
  canvas.style.border = "1px solid black"
  // Get the initial time.
  var t = Date.now()

  // Get a drawable context from the canvas.
  var ctx = canvas.getContext("2d")

  ctx.fillRect(0,0,canvas.width, canvas.height)
  function draw () {
    function a_color () {
      return Math.round(Math.random() * 256).toString(16)
    }

    var s = 6

    function createShape(origin) {
      var p = Math.round(Math.random() * 64)
      var r = Math.round(Math.random() * 32)

      var i = Math.round(Math.random() * p+1)

      var j = (p-i)

      for (var i = 0; i < p; i++) {
        if (Math.sqrt(origin[0]**2 + origin[1]**2) > 12**2) { break; }
          // Prepare to draw a path.
          ctx.beginPath()
          // Set the origin of the line.
          ctx.moveTo(origin[0]+100, origin[1]+100)

          // Set the end coordinate of the line.
          ctx.lineTo(origin[0] + 100 + r*Math.cos(i * TAU/p),
              origin[1] + 100 + r*Math.sin(i * TAU/p))

          // Apply the stroke.
          ctx.strokeStyle="#00"+Math.round(Math.random()*100+156).toString(16)+Math.round(Math.random()*256).toString(16)
          ctx.stroke()
      }
    }

    for (var i = 0; i < 4; i++) {
      createShape([Math.random()*canvas.width, Math.random()*canvas.height])
    }
  }

  setInterval(draw, 1)
}
