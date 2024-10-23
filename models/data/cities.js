import 'dotenv/config.js';
import '../../config/database.js';
import City from "../City.js";

const cities = [
    {
        name: "Barcelona",
        photo: "https://i.imgur.com/LPB2d5o.jpeg",
        country: "Spain",
        continent: "Europe",
        description: "A vibrant Mediterranean city known for its modernist architecture and rich culture.",
        currency: "Euro"
    },
    {
        name: "Buenos Aires",
        photo: "https://i.imgur.com/1fSuTfE.jpeg",
        country: "Argentina",
        continent: "South America",
        description: "Cultural capital of Argentina, famous for tango and its vibrant nightlife.",
        currency: "Argentine Peso"
    },
    {
        name: "Cairo",
        photo: "https://i.imgur.com/6AujkLz.jpeg",
        country: "Egypt",
        continent: "Africa",
        description: "Historic city on the banks of the Nile, famous for the pyramids and ancient history.",
        currency: "Egyptian Pound"
    },
    {
        name: "Cartagena",
        photo: "https://i.imgur.com/uj1tnhH.jpeg",
        country: "Colombia",
        continent: "South America",
        description: "Beautiful coastal city with a mix of colonial history and tropical beaches.",
        currency: "Colombian Peso"
    },
    {
        name: "Córdoba",
        photo: "https://i.imgur.com/jKbrOEY.jpeg",
        country: "Argentina",
        continent: "South America",
        description: "Argentinian city known for its colonial architecture and vibrant university life.",
        currency: "Argentine Peso"
    },
    {
        name: "Krakow",
        photo: "https://i.imgur.com/0iIaHUe.jpeg",
        country: "Poland",
        continent: "Europe",
        description: "Medieval Polish city famous for its historic center and Wawel Castle.",
        currency: "Zloty"
    },
    {
        name: "Dubai",
        photo: "https://i.imgur.com/q00EFlR.jpeg",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "Luxurious city known for its skyscrapers, malls, and modern attractions.",
        currency: "Dirham"
    },
    {
        name: "Dubrovnik",
        photo: "https://i.imgur.com/ggWUU6r.jpeg",
        country: "Croatia",
        continent: "Europe",
        description: "Walled city on the Adriatic coast, famous for its medieval buildings.",
        currency: "Euro"
    },
    {
        name: "Edinburgh",
        photo: "https://i.imgur.com/Q614L8d.jpeg",
        country: "Scotland",
        continent: "Europe",
        description: "Capital of Scotland, known for its castle and annual cultural festival.",
        currency: "Pound Sterling"
    },
    {
        name: "Istanbul",
        photo: "https://i.imgur.com/jgO8UNQ.jpeg",
        country: "Turkey",
        continent: "Asia",
        description: "City spanning two continents, famous for its Byzantine and Ottoman history.",
        currency: "Turkish Lira"
    },
    {
        name: "Florence",
        photo: "https://i.imgur.com/2cwaGXA.jpeg",
        country: "Italy",
        continent: "Europe",
        description: "Birthplace of the Renaissance, known for its art, architecture, and museums.",
        currency: "Euro"
    },
    {
        name: "Hanoi",
        photo: "https://i.imgur.com/5aU2Vm0.jpeg",
        country: "Vietnam",
        continent: "Asia",
        description: "Capital of Vietnam, known for its old quarter and rich cultural history.",
        currency: "Dong"
    },
    {
        name: "Kyoto",
        photo: "https://i.imgur.com/NJ81F7N.jpeg",
        country: "Japan",
        continent: "Asia",
        description: "Historic Japanese city famous for its temples and traditional gardens.",
        currency: "Yen"
    },
    {
        name: "Mexico City",
        photo: "https://i.imgur.com/YhPEKl5.jpeg",
        country: "Mexico",
        continent: "North America",
        description: "Vibrant city and capital of the country, known for its rich culture and food.",
        currency: "Mexican Peso"
    },
    {
        name: "Oaxaca",
        photo: "https://i.imgur.com/eVXzHsK.jpeg",
        country: "Mexico",
        continent: "North America",
        description: "Mexican city known for its colonial architecture and indigenous cultural heritage.",
        currency: "Mexican Peso"
    },
    {
        name: "Prague",
        photo: "https://i.imgur.com/ODb0Vvz.jpeg",
        country: "Czech Republic",
        continent: "Europe",
        description: "Capital of the Czech Republic, famous for its old town and Charles Bridge.",
        currency: "Czech Koruna"
    },
    {
        name: "Salzburg",
        photo: "https://i.imgur.com/5eLFyeZ.jpeg",
        country: "Austria",
        continent: "Europe",
        description: "Birthplace of Mozart, known for its classical music and Alpine landscapes.",
        currency: "Euro"
    },
    {
        name: "Santorini",
        photo: "https://i.imgur.com/MCrfJqN.jpeg",
        country: "Greece",
        continent: "Europe",
        description: "Greek island famous for its spectacular views and whitewashed buildings.",
        currency: "Euro"
    },
    {
        name: "Sydney",
        photo: "https://i.imgur.com/172QArS.jpeg",
        country: "Australia",
        continent: "Oceania",
        description: "Iconic city known for its Opera House and stunning harbor.",
        currency: "Australian Dollar"
    },
    {
        name: "Vancouver",
        photo: "https://i.imgur.com/BQf0WTh.jpeg",
        country: "Canada",
        continent: "North America",
        description: "Canadian coastal city known for its quality of life and natural beauty.",
        currency: "Canadian Dollar"
    }
];

City.insertMany(cities);