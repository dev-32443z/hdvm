import React, { Component } from "react";
import { MapContainer, GeoJSON, TileLayer, Popup } from "react-leaflet";
import mapData from "./countries.json";
import countryData from "./country_economic_data.json";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import africanCountries from './african_countries';


class Map extends Component {

    state = { color: "#ffff00" };

    async componentDidMount() {
        // console.log(mapData);
    }

    countryStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };

    isCountryInAfrica = (countryName) => {
        return africanCountries.some((country) =>
            countryName.toLowerCase().includes(country.toLowerCase())
        );
    };

    decimalToPercent = (decimal) => {
        return (decimal * 100).toFixed(2) + "%";
    }

    searchForCountryValue = (countryName) => {
        const countries = countryData.countries;

        for (const country of countries) {
            if (country.country.name.toLowerCase() === countryName.toLowerCase()) {
                return country.malnutrition.chronic_percent
            }
        }

        return null; // Country not found
    };

    searchForCountry = (countryName) => {
        const countries = countryData.countries;

        for (const country of countries) {
            if (country.country.name.toLowerCase() === countryName.toLowerCase()) {
                const chronic_percentage = this.decimalToPercent(country.malnutrition.chronic_percent)
                const acute_percentage = this.decimalToPercent(country.malnutrition.acute_percent)
                const formattedString = `
            <h2>${country.country.name}</h2>
            <p>% of Population with Chronic Hunger: <b>${chronic_percentage.toString()}</b></p>
            <p>% of Population with Acute Hunger: <b>${acute_percentage.toString()}</b></p>
            <p>Population: <b>${country.population.number}</b></h2>
            <p>Income Level: <b>${country.income_group.level}</b></h2>
        `;
                return formattedString;

            }
        }

        return null; // Country not found
    };


    getCountryData = (countryName) => {
        const countries = countryData.countries;

        for (const country of countries) {
            if (country.country.name.toLowerCase() === countryName.toLowerCase()) {
                return country

            }
        }

        return null; // Country not found
    };

    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        if (this.isCountryInAfrica(countryName)) {
            console.log(countryName);
            const chronic_percentage = this.searchForCountryValue(countryName);
            console.log(chronic_percentage)
            var opacity_level = 0.1;
            var countryColor = "grey";
            layer.bindPopup(this.searchForCountry(countryName));

            if (chronic_percentage < 0.1) {
                opacity_level = 0.1;
            }
            if (chronic_percentage > 0.1 && chronic_percentage < 0.2) {
                opacity_level = 0.2;
            }
            if (chronic_percentage > 0.2 && chronic_percentage < 0.3) {
                opacity_level = 0.3;
            }
            if (chronic_percentage > 0.3 && chronic_percentage < 0.4) {
                opacity_level = 0.4;
            }
            if (chronic_percentage > 0.4 && chronic_percentage < 0.5) {
                opacity_level = 0.5;
            }
            if (chronic_percentage > 0.5 && chronic_percentage < 0.6) {
                opacity_level = 0.6;
            }
            if (chronic_percentage > 0.6 && chronic_percentage < 0.7) {
                opacity_level = 0.7;
            }
            if (chronic_percentage > 0.7 && chronic_percentage < 0.8) {
                opacity_level = 0.8;
            }
            if (chronic_percentage > 0.8 && chronic_percentage < 0.9) {
                opacity_level = 0.9;
            }
            if (chronic_percentage > 0.9) {
                opacity_level = 1;
            }

            if (chronic_percentage < 0.2) {
                countryColor = "#00E676";
            }
            if (chronic_percentage > 0.2 && chronic_percentage < 0.4) {
                countryColor = "#FFC400";
            }
            if (chronic_percentage > 0.4) {
                countryColor = "#b02a35"
            }
            layer.options.fillOpacity = opacity_level;
            layer.options.fillColor = countryColor;
        } else {
            layer.options.fillOpacity = 0;
        }
    };

    colorChange = (event) => {
        this.setState({ color: event.target.value });
    };


    render() {
        const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
        const username = process.env.REACT_APP_MAPBOX_USERNAME;
        const styleId = process.env.REACT_APP_MAPBOX_STYLE_ID;

        return (
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <header style={{ padding: "0", textAlign: "center", backgroundColor: "#0e2b61", color: "white" }}>
                    <h1 style={{ margin: "0", padding: "1rem" }}>Food Security Map - Based on Chronic Hunger Levels</h1>
                    <p>Click on a highlighted country to learn more</p>
                </header>
                <main style={{ flex: "1 0 auto" }}>
                    <MapContainer style={{ height: "90vh" }} zoom={3.45} minZoom={2.5} center={[15.4542, 18.7322]}>
                        <TileLayer
                            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                            url={`https://api.mapbox.com/styles/v1/${username}/${styleId}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`} />

                        <GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry} />
                    </MapContainer>
                </main>
                <footer style={{ padding: "0", textAlign: "center", backgroundColor: "#0e2b61", color: "white" }}>
                    <p style={{ margin: "0", padding: "1rem" }}>2023</p>
                </footer>
            </div>
        );
    }
}

export default Map;
