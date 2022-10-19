# HRnet

This project the code of the HRnet application, that is an upgrade of the original [HRnet legacy project](https://github.com/WandoCode/OC-HRNet) (jQuery => React).

That app allows to register employees and to display them into a table.

# Start

## Prerequisite

- nodeJS: >v16.14.2

To test production:

- serve: >14.0.1

## Installation

1. Fork then clone this repository on your computer
2. Run `npm install` to install all dependencies
3. Run `npm start` or `npm run start:dev` to launch the application

## Available Scripts

## `npm start`

Launches application without mocked datas, for developpement.

## `npm run start:dev`

Launch the app like `npm start` would but populate also the app with mock datas, for developpement.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run test`

Run all the test of the current project.

## `start:prod`

Run the builded app.
