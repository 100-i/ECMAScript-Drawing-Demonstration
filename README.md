Ecmascript Drawing Demonstration
================================

An example of how to draw to a `canvas` HTML element.

## Requirements

### NodeJS

#### Windows

~~~~~~powershell
choco install nodejs.install
~~~~~~

#### Yarn

#### Windows

~~~~~~powershell
choco install yarn
~~~~~~

## Use

First, clone the project.

~~~~~~powershell
git clone https://github.com/100-i/Ecmascript-Drawing-Demonstration.git
~~~~~~

Second, navigate to the project directoy, and build the project's Ecmascript
requirements with `yarn`.

~~~~~~powershell
yarn run build
~~~~~~

Then open `index.html` in a web browser.

A simple shortcut from powershell uses the `Invoke-Item` cmdlet.

~~~~~~powershell
# 'ii' aliases Invoke-Item, and '.' expands to the current working directory.
ii .
~~~~~~
## Recreating This Project

Recreate this project From scratch.

~~~~~~shell
# Initialize the project with Yarn.
yarn init

# Add Webpack to the project.
yarn add webpack --dev

# Run webpack to the projcet.
yarn run webpack
~~~~~~
