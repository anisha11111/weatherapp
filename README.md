<<<<<<< HEAD
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
=======
# Weather WebApp

# Overview
Weather WebApp is a responsive web application that allows users to get the current weather information for a specified city or using their current geolocation. The app fetches weather data from the OpenWeather API and displays essential weather details such as temperature, humidity, wind speed, and weather conditions. Users can also switch between Celsius and Fahrenheit units.

# Features
- **Geolocation Support**: Get weather based on the current location of the user.
- **Search by City**: Enter a city name to retrieve its weather information.
- **Unit Conversion**: Toggle between Celsius (°C) and Fahrenheit (°F) for temperature.
- **Error Handling**: Displays error messages for invalid city names or issues with geolocation.
- **Responsive Design**: The app works well on both desktop and mobile devices.

# Technologies Used
- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **API**: OpenWeather API for fetching weather data.
- **Libraries**: Axios for making API requests.

# How to Use
1. Clone or download the project.
2. Open the `index.html` file in a browser.
3. Enter a city name and click the **Get Weather** button, or click the **Use Current Location** button to get weather based on your current location.
4. View the weather details and toggle between Celsius and Fahrenheit for the temperature.

# API Configuration
To use the OpenWeather API, you'll need to sign up on [OpenWeather](https://openweathermap.org/api) and obtain an API key.

# Steps to get your API key:
1. Go to [OpenWeather API](https://openweathermap.org/api).
2. Sign up for an account if you don't already have one.
3. Generate an API key from your OpenWeather account.
4. Replace `'your-api-key-here'` in the `script.js` file with your actual API key.

# Example:
```js
const API_KEY = 'your-api-key-here';  // Replace with your OpenWeather API key
>>>>>>> 3ad72ed (Initial commit - Added Weather WebApp files)
