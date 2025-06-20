function getWeather() {
            const city = document.getElementById('cityInput').value;
            if (city) {
                const apiKey = '48ea2cda9af395d7b2abe4b8cf4903ab';
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const tableBody = document.getElementById('weatherTableBody');
                        tableBody.innerHTML = `
                            <tr>
                                <td>${data.name}</td>
                                <td>${data.main.temp} °C</td>
                                <td>${data.weather[0].description}</td>
                            </tr>
                        `;
                    })
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                    });
            } else {
                alert('Please enter a city name');
            }
        }