export default async function handler(req, res) {
    const city = req.query.city || "Malang"; // Default ke Malang jika tidak ada parameter
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; // Gunakan API Key dari .env.local
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            res.status(200).json({
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed
            });
        } else {
            res.status(response.status).json({ message: data.message });
        }
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil data cuaca" });
    }
}
