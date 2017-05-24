// Ration of centimers to inches
var CM_IN = 2.54

// Generate a card design
export function generateCardDesign (width=2.5, height=3.5, patternFunction) {
  var cardImage = ctx.CreateImageData(width, height)
  var pattern = patternFunction()
  console.log(pattern)
}

// Function to generate an array of cartesian coordinates to be used as a
// pattern for drawing.
export function patternSpiral () {
  var stack = []
  for (var i = 0; i < 720; i++) {
    // Angle of rotation
    theta = 0.1 * i
    // Cartesian coordinates
    var x = (1+theta) + Math.cos(theta)
    var y = (1+theta) + Math.sin(theta)

    stack.push([x,y])
  }

  return stack
}
