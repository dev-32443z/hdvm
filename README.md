# Food Security Data Visualization Map POC (Proof of Concept)

Live: https://hdvm.vercel.app/

Demo:
![map_giphy_two](https://github.com/dev-32443z/hdvm/assets/135600992/ddce2734-c3b4-4bec-b91b-66b035d82891)

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Design](#design)
- [Data](#data)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Docker](#docker)
- [Usage](#usage)

## Introduction
This project is a food security data visualization map proof of concept that displays food security information for various countries in Africa. 

## Technologies
The following technologies are used in this project:
- Framework: [ReactJS](https://react.dev/learn)
- Map Rendering: [Mapbox + Leaflet](https://react-leaflet.js.org/)
- Deployment: [Vercel](https://vercel.com/)

## Design
- The Following is a demo of the POC design used as inspiration for this project: [Design Demo](https://www.figma.com/proto/MRoSIBb5sB4H6kTGlFJGO0/Untitled?type=design&node-id=2-60&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A60)

- Additionally, the PDF version can be found locally in this repo with the name ```Design.pdf```

## Data
- Country information from https://api.hungermapdata.org/v2/info/country was used to get data to set the coloring and pop up values
- Data from https://datahub.io/core/geo-countries was used as geojson to created shapes. Since this repo contains all country data, a function 
was made to parse through countries in Africa.
- The country percentage value ```country.malnutrition.chronic_percent``` was used to color the map with the following rules:
    - Green: low level chronic malnutrition rates
    - Yellow: medium level chronic malnutrition rates
    - Red: high level chronic malnutrition rates
- These percentages were also used to determine the color opacity as well

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
To use the deployed app, go to the following link: https://hdvm.vercel.app/






