# Hunger Data Visualization Map

Live: https://hdvm.vercel.app/

Demo:
![map_giphy_two](https://github.com/dev-32443z/hdvm/assets/135600992/ddce2734-c3b4-4bec-b91b-66b035d82891)

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Docker](#docker)
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

## Docker
Alternatively, you can run this project locally using Docker. After setting your .env variables:
1. [Download Docker](https://docs.docker.com/get-docker/) and make sure that it is running on your machine
2. Build the docker image containing the application:
   ```
   docker build -t <image-name> .
   ```
3. Run the docker image:
   ```
   docker run -p 3000:3000 <image-name>
   ```
4. Open your browser and navigate to `http://localhost:3000` to see the hunger data visualization map running from docker

## Usage
To use the deployed app, go to the following link: https://hdvm-sdar.vercel.app/






