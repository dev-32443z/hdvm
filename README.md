# Hunger Data Visualization Map

Live: https://hdvm.vercel.app/

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Usage](#usage)

## Introduction
This project is a hunger data visualization map that displays food security information for various countries in Africa. 

## Technologies
The following technologies are used in this project:
- Framework: [ReactJS](https://react.dev/learn)
- Map Rendering: [Mapbox + Leaflet](https://react-leaflet.js.org/)
- Deployment: [Vercel](https://vercel.com/)


## Requirements
Make sure you have the following installed:
- Node.js (version 19.2.0 or higher)
- npm (version9.6.7 or higher)

## Installation
1. Clone the repository. 
2. Navigate to the project directory in your terminal.
3. Run the following command to install the project dependencies:
    ```
    npm install
    ```


## Development
To run this app on your local environment:

1. Obtain an access token from Mapbox by signing up on their website. Create your own mapbox style.
2. Create a file named `.env` in the root directory of the project.
3. Add the following contents to your `.env` file:
    ```
    REACT_APP_MAPBOX_USERNAME=<mapbox username>
    REACT_APP_MAPBOX_ACCESS_TOKEN=<mapbox access token>
    REACT_APP_MAPBOX_STYLE_ID=mapbox style id>
    ```
4. Save the `.env` file.
5. Run the following command to start the development server:
    ```
    npm start
    ```
6. Open your browser and navigate to `http://localhost:3000` to see the hunger data visualization map.


## Usage
To use the deployed app, go to the following link: https://hdvm-sdar.vercel.app/






