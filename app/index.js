import { Matrix } from 'sylvester-es6'
import { init2dDraw } from './2dContext.js'

// Styling for body element
document.body.style.textAlign = "center"

// Create a title at the head of the document
var header = document.createElement('h1')

// Supply div conent.
header.innerHTML = 'ECMAScript Drawing Demonstration'

// Append the header to document body element.
document.body.appendChild(header)

// Create a headline rule
document.body.appendChild(document.createElement('hr'))

// Create the canvas element.
var canvas = document.createElement('canvas')

// Add margin to top of canvas element.
canvas.style.marginTop = '16px'

// Append the canvas element to the document.
document.body.appendChild(canvas)

// Call the function to initialize the drawing event.
init2dDraw(canvas)
