/**
 * Start the application's drawing events.
 */
function start () {
  console.log("Starting WebGL Context.")

  // Find at least one canvas element from the document.
  var canvas = document.getElementsByTagName('canvas')[0]

  // Initialize the gl context and return it to a local reference, 'gl'.
  var gl = initWebGL(canvas)

  gl.clearColor(0.0, 0.0, 1.0, 1.0)
  gl.clearDepth(1.0)
  gl.enable(gl.DEPTH_TEST)
  gl.depthFunc(gl.LEQUAL)

  function drawScene () {
    var current_time = Date.now()
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    perspectiveMatrix = makePerspective(45, 640.0/480.0, 0.1, 100.0)

    loadIndentity()

    mvTranslate([-0.0, 0.0, -16.0])

    gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer)

    gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0)

    setMatrixUniforms()

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }

  var horizAspect = 480.0/640.0
  initBuffers(gl)
  initShaders(gl)
}

/**
 * Initialize the WebGL context.
 */
function initWebGL (canvas) {
  var gl = null

  // Try to get a WebGL context from the canvas element.
  try {
    gl = canvas.getContext('experimental-webgl')
  } catch (e) {}

  // Report a failure if our 'gl' reference is missing.
  if (!gl)
    console.error('WebGL initialization failure')

  return gl
}

//
// getShader
//
function getShader(gl, id, type) {
  var shaderScript = document.getElementById(id)

  shaderScript = document.getElementById(id)

  // If the element holding the shader is not found, return 'null'.
  if (!shaderScript)
    return null

  // Build the shader content by walking through the element's children.
  var theSource = ""
  var currentChild = shaderScript.firstChild
  
  while(currentChild) {
    if (currentChild.nodeType ==3)
      theSource += currentChild.textContent

    currentChild = currentChild.nextSibling
  }

  var shader

  if (shaderScript.type == 'x-shader/x-fragment')
    shader = gl.createShader(gl.FRAGMENT_SHADER)
  else if (shaderScript.type == 'x-shader/x-vertex')
    shader = gl.createShader(gl.VERTEX_SHADER)
  else
    return null

  // Send the source to the shader object.
  gl.shaderSource(shader, theSource)

  // Compile the shader program.
  gl.compileShader(shader)

  // See if the compilation was successful.
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log('An error occurred compiled the shaders: ' 
        + gl.getShaderInfoLog(shader))
    return null
  }

  return shader
}

// Shaders
function initShaders(gl) {
  var fragmentShader = getShader(gl, 'shader-fs')
  var vertexShader = getShader(gl, 'shader-vs')

  shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertexShader)
  gl.attachShader(shaderProgram, fragmentShader)
  gl.linkProgram(shaderProgram)


  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.log('Shader program failed to initialize: '
        + gl.getProgramInfoLog(shaderProgram))
  }

  gl.useProgram(shaderProgram)

  vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition')
  gl.enableVertexAttribArray(vertexPositionAttribute)
}

// Buffers

//
// initBuffers
//
// Initialize the buffers for the context.
//
function initBuffers (gl) {
  // Craeate a buffer.
  squareVerticesBuffer = gl.createBuffer()

  // Select the buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer)

  // Create an array of vertices for a square. The Z coordinate is always 0.
  var vertices = [
    1.0,  1.0, 0.0,
    -1.0, 1.0, 0.0,
    1.0,  -1.0, 0.0, 
    -1.0, -1.0, 0.0
  ]

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
}

function loadIndentity () {
  mvMatrix = Matrix.I(4)
}

function multMatrix(m) {
  mvMatrix = mvMatrix.x(m)
}

function mvTranslate(v) {
  multMatrix(Matrix.Translation($V([v[0], v[1], v[2]])).ensure4x4())
}

function setMatrixUniforms () {
  var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix")
  gl.uniformMatrix4fv(pUniform, false,
      new Float32Array(perspectiveMatrix.flatten()))

  var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix")
  gl.uniformMatrix4fv(mvUniform, false, 
      new Float32Array(mvMatrix.flatten()))
}
