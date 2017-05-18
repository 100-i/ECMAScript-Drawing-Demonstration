ECMAScript Drawing Demonstration
================================

An example of how to draw to a `canvas` HTML element.

## Requirements

The software from each section below must be installed for this project to
function.

### NodeJS

[NodeJS](https://nodejs.org/en/) is a JavaScript runtime that allows you to
run and interpret JavaScript without a web-browser.

#### Windows

~~~~~~powershell
choco install nodejs.install
~~~~~~

### Yarn

[Yarn](https://yarnpkg.com/en/) is a dependency management system for JavaScript.
#### Windows

~~~~~~powershell
choco install yarn
~~~~~~

## Using the Demonstration

First, clone the project.

~~~~~~powershell
git clone https://github.com/100-i/ECMAScript-Drawing-Demonstration.git
~~~~~~

Second, navigate to the project directoy, and build the project's Ecmascript
requirements with `yarn`.

~~~~~~powershell
yarn run build
~~~~~~

Then open `index.html` in a web browser.

### Note

A simple shortcut to open a web-browser from powershell uses the 
`Invoke-Item` cmdlet:

~~~~~~powershell
# 'ii' aliases Invoke-Item, and '.' expands to the current working directory.
PS > ii .
~~~~~~

## Recreating This Project

Recreate this project From scratch.

We will use `yarn` to initialize the project and add
[Webpack](https://webpack.gitub.com).

~~~~~~shell
# Initialize the project with Yarn.
yarn init

# Add Webpack to the project.
yarn add webpack --dev

# Run webpack to build the project's asset.
yarn run webpack
~~~~~~
