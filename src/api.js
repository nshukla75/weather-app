
export const getWeatherForLocation = city => {
    const [lat, long] = city["latt_long"].split(",");
    return fetch(`https://weather-app-nitu.herokuapp.com/forecast/${lat},${long}`,
    {
        mode: "cors"
    }

    ).then(res=> res.json());
}