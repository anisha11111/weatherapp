<<<<<<< HEAD
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
=======
    // Store temperature values globally for unit conversion
let tempCelsius = null;
let tempFahrenheit = null;
let currentUnit = 'C';

// API configuration
const API_KEY = '583fbd0098e0bbf38156e687ee341bd0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Create a custom Promise-based wrapper for XMLHttpRequest
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`));
      }
    };

    xhr.onerror = function() {
      reject(new Error('Request failed'));
    };

    xhr.send();
  });
}

// Function to get weather data by city name
async function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value.trim();

  if (!city) {
    showError('Please enter a city name');
    return;
  }

  try {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const data = await makeRequest(url);
    displayWeather(data);
    hideError();
  } catch (error) {
    showError('City not found or error fetching weather data');
    hideWeather();
  }
}

// Function to display weather data
function displayWeather(data) {
  const weatherContainer = document.getElementById('weatherContainer');
  const weatherIcon = document.getElementById('weatherIcon');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const humidity = document.getElementById('humidity');
  const windSpeed = document.getElementById('windSpeed');

  // Store temperatures
  tempCelsius = data.main.temp;
  tempFahrenheit = (tempCelsius * 9/5) + 32;

  // Display data
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temperature.textContent = `${currentUnit === 'C' ? tempCelsius.toFixed(1) : tempFahrenheit.toFixed(1)}°${currentUnit}`;
  description.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} m/s`;

  weatherContainer.style.display = 'block';
}

// Function to toggle temperature unit
function toggleUnit(unit) {
  if (currentUnit === unit) return;
  
  currentUnit = unit;
  const temperature = document.getElementById('temperature');
  
  if (tempCelsius !== null) {
    temperature.textContent = `${currentUnit === 'C' ? tempCelsius.toFixed(1) : tempFahrenheit.toFixed(1)}°${currentUnit}`;
  }

  // Update button styles
  document.getElementById('celsiusBtn').classList.toggle('active', unit === 'C');
  document.getElementById('fahrenheitBtn').classList.toggle('active', unit === 'F');
}

// Error handling functions
function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

function hideError() {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.style.display = 'none';
}

function hideWeather() {
  const weatherContainer = document.getElementById('weatherContainer');
  weatherContainer.style.display = 'none';
}

// Geolocation feature: triggered by the location button
function getLocationWeather() {
  if (!navigator.geolocation) {
    showError('Geolocation is not supported by your browser. Please enter a city name manually.');
    return;
  }

  navigator.geolocation.getCurrentPosition(async (position) => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);

    try {
      const url = `${BASE_URL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
      console.log('API URL:', url); // Debugging: Log the API URL
      const data = await makeRequest(url);
      console.log('API Response:', data); // Debugging: Log the API response
      displayWeather(data);
      hideError();
      // Update input field with the detected city name
      document.getElementById('cityInput').value = data.name;
    } catch (error) {
      console.error('Error fetching weather data:', error); // Debugging: Log the error
      showError('Error fetching weather data for your location');
      hideWeather();
    }
  }, (error) => {
    if (error.code === error.PERMISSION_DENIED) {
      showError('Location access denied. Please enable location services or enter a city name manually.');
    } else {
      showError('Unable to retrieve your location. Please enter a city name manually.');
    }
    hideWeather();
  });
}
// Function to get the user's geolocation and fetch weather data
// Function to get the user's geolocation and fetch weather data
function getUserLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// Success callback after getting geolocation
async function successCallback(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  console.log('Latitude:', latitude);
  console.log('Longitude:', longitude);

  try {
    // Construct URL with coordinates for weather data
    const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    console.log('API URL:', url); // Debugging: Log the API URL
    const data = await makeRequest(url);
    console.log('API Response:', data); // Debugging: Log the API response
    
    // Display the weather data
    displayWeather(data);
    hideError();
    
    // Update input field with the detected city name
    document.getElementById('cityInput').value = data.name;
  } catch (error) {
    console.error('Error fetching weather data:', error); // Debugging: Log the error
    showError('Error fetching weather data for your location');
    hideWeather();
  }
}

// Error callback if geolocation fails
function errorCallback(error) {
  if (error.code === error.PERMISSION_DENIED) {
    showError('Location access denied. Please enable location services or enter a city name manually.');
  } else {
    showError('Unable to retrieve your location. Please enter a city name manually.');
  }
  hideWeather();
}

// Automatically detect location and display weather data when the app loads
// Automatically detect location and display weather data when the app loads
document.addEventListener('DOMContentLoaded', () => {
  getUserLocation(); // Call function to get user location on page load
});
>>>>>>> 3ad72ed (Initial commit - Added Weather WebApp files)
