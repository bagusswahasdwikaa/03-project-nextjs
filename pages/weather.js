import React, { useState } from 'react';

const WeatherPage = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        if (!city) return;
        
        setError("");
        setWeather(null);
        
        try {
            const res = await fetch(`/api/weather?city=${city}`);
            const data = await res.json();

            if (res.ok) {
                setWeather(data);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Terjadi kesalahan saat mengambil data.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Info Cuaca</h1>
            <input
                type="text"
                placeholder="Masukkan nama kota"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Cari Cuaca</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {weather && (
                <div>
                    <h2>{weather.city}</h2>
                    <p>Temperatur: {weather.temperature}°C</p>
                    <p>Deskripsi: {weather.description}</p>
                    <p>Kelembaban: {weather.humidity}%</p>
                    <p>Kecepatan Angin: {weather.windSpeed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default WeatherPage;
