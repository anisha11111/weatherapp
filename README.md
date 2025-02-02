# Enhanced Weather App

## Overview
This is a responsive weather web app that fetches weather data from the OpenWeather API. It allows users to:
- Search for weather by city.
- Get weather details using their current location.
- Switch between Celsius and Fahrenheit units.
- View details like temperature, humidity, wind speed, and weather conditions.

## Features
- **Geolocation Support**: Get weather based on current location.
- **Search Functionality**: Enter a city name to fetch weather.
- **Unit Conversion**: Toggle between Celsius and Fahrenheit.
- **Error Handling**: Displays appropriate messages for invalid inputs.

## Technologies Used
- HTML, CSS, JavaScript
- OpenWeather API

## How to Use
1. Open `index.html` in a browser.
2. Enter a city name and click **Submit**, or click the **Location** button to get your current weather.
3. View weather details and switch between Celsius and Fahrenheit.

## API Configuration
To use this app, replace `API_KEY` in `index.html` with your OpenWeather API key:
```js
const API_KEY = 'your-api-key-here';
