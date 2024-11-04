import 'dotenv/config.js';
import '../../config/database.js';
import "../City.js";
import Itinerary from '../Itinerary.js';

const itineraries = [
    // Barcelona
    { name: "Tour Modernista", photo: "https://example.com/barcelona1.jpg", duration: 180, likes: 150, hashtags: ["#Gaudi", "#Barcelona", "#Art"], city: "67196a8023ba449ec5254754" },
    { name: "Paseo por Las Ramblas", photo: "https://example.com/barcelona2.jpg", duration: 120, likes: 90, hashtags: ["#Barcelona", "#LasRamblas", "#Cultura"], city: "67196a8023ba449ec5254754" },
    { name: "Visita al Camp Nou", photo: "https://example.com/barcelona3.jpg", duration: 240, likes: 200, hashtags: ["#FCBarcelona", "#CampNou", "#Futbol"], city: "67196a8023ba449ec5254754" },
    { name: "Tapas y Vinos", photo: "https://example.com/barcelona4.jpg", duration: 150, likes: 120, hashtags: ["#Tapas", "#Barcelona", "#Gastronomia"], city: "67196a8023ba449ec5254754" },
    { name: "Museo Picasso", photo: "https://example.com/barcelona5.jpg", duration: 90, likes: 180, hashtags: ["#Picasso", "#Museo", "#Barcelona"], city: "67196a8023ba449ec5254754" },

    // Florence
    { name: "Explora el Duomo", photo: "https://example.com/florence1.jpg", duration: 120, likes: 250, hashtags: ["#Florencia", "#Duomo", "#Arquitectura"], city: "67196a8023ba449ec525475e" },
    { name: "Galería Uffizi", photo: "https://example.com/florence2.jpg", duration: 180, likes: 200, hashtags: ["#Uffizi", "#Arte", "#Rinascimento"], city: "67196a8023ba449ec525475e" },
    { name: "Puente Vecchio", photo: "https://example.com/florence3.jpg", duration: 60, likes: 130, hashtags: ["#Vecchio", "#Florencia", "#Rio"], city: "67196a8023ba449ec525475e" },
    { name: "Caminata en Oltrarno", photo: "https://example.com/florence4.jpg", duration: 150, likes: 90, hashtags: ["#Oltrarno", "#Historia", "#Florencia"], city: "67196a8023ba449ec525475e" },
    { name: "Plaza de la Señoría", photo: "https://example.com/florence5.jpg", duration: 45, likes: 160, hashtags: ["#Plaza", "#Florencia", "#Historia"], city: "67196a8023ba449ec525475e" },

    // Cairo
    { name: "Pirámides de Giza", photo: "https://example.com/cairo1.jpg", duration: 300, likes: 500, hashtags: ["#Giza", "#Egipto", "#Historia"], city: "67196a8023ba449ec5254756" },
    { name: "Museo Egipcio", photo: "https://example.com/cairo2.jpg", duration: 180, likes: 250, hashtags: ["#Museo", "#Cairo", "#Faraones"], city: "67196a8023ba449ec5254756" },
    { name: "Barrio Copto", photo: "https://example.com/cairo3.jpg", duration: 90, likes: 130, hashtags: ["#Copto", "#Cultura", "#Egipto"], city: "67196a8023ba449ec5254756" },
    { name: "Mezquita de Muhammad Alí", photo: "https://example.com/cairo4.jpg", duration: 120, likes: 180, hashtags: ["#Mezquita", "#Cairo", "#Arquitectura"], city: "67196a8023ba449ec5254756" },
    { name: "Mercado de Jan el-Jalili", photo: "https://example.com/cairo5.jpg", duration: 60, likes: 90, hashtags: ["#Mercado", "#Cairo", "#Compras"], city: "67196a8023ba449ec5254756" },

    // Edinburgh
    { name: "Castillo de Edimburgo", photo: "https://example.com/edinburgh1.jpg", duration: 120, likes: 300, hashtags: ["#Castillo", "#Escocia", "#Historia"], city: "67196a8023ba449ec525475c" },
    { name: "Royal Mile", photo: "https://example.com/edinburgh2.jpg", duration: 90, likes: 150, hashtags: ["#RoyalMile", "#Cultura", "#Escocia"], city: "67196a8023ba449ec525475c" },
    { name: "Museo Nacional de Escocia", photo: "https://example.com/edinburgh3.jpg", duration: 180, likes: 200, hashtags: ["#Museo", "#Edimburgo", "#Historia"], city: "67196a8023ba449ec525475c" },
    { name: "Caminata en Arthur’s Seat", photo: "https://example.com/edinburgh4.jpg", duration: 150, likes: 220, hashtags: ["#Naturaleza", "#Edimburgo", "#Senderismo"], city: "67196a8023ba449ec525475c" },
    { name: "Jardín Botánico Real", photo: "https://example.com/edinburgh5.jpg", duration: 60, likes: 100, hashtags: ["#JardinBotanico", "#Edimburgo", "#Naturaleza"], city: "67196a8023ba449ec525475c" },

    // Istanbul
    { name: "Santa Sofía", photo: "https://example.com/istanbul1.jpg", duration: 120, likes: 350, hashtags: ["#SantaSofia", "#Historia", "#Estambul"], city: "67196a8023ba449ec525475d" },
    { name: "Mezquita Azul", photo: "https://example.com/istanbul2.jpg", duration: 90, likes: 270, hashtags: ["#Mezquita", "#Turquía", "#Cultura"], city: "67196a8023ba449ec525475d" },
    { name: "Bazar de las Especias", photo: "https://example.com/istanbul3.jpg", duration: 60, likes: 200, hashtags: ["#Bazar", "#Especias", "#Compras"], city: "67196a8023ba449ec525475d" },
    { name: "Torre de Gálata", photo: "https://example.com/istanbul4.jpg", duration: 45, likes: 160, hashtags: ["#Galata", "#Panorama", "#Estambul"], city: "67196a8023ba449ec525475d" },
    { name: "Paseo en el Bósforo", photo: "https://example.com/istanbul5.jpg", duration: 180, likes: 230, hashtags: ["#Bosforo", "#Navegación", "#Estambul"], city: "67196a8023ba449ec525475d" },

    // Kyoto
    { name: "Templo Kinkaku-ji", photo: "https://example.com/kyoto1.jpg", duration: 120, likes: 280, hashtags: ["#Kyoto", "#Kinkakuji", "#Japón"], city: "67196a8023ba449ec5254760" },
    { name: "Santuario Fushimi Inari", photo: "https://example.com/kyoto2.jpg", duration: 180, likes: 320, hashtags: ["#FushimiInari", "#Templo", "#Japón"], city: "67196a8023ba449ec5254760" },
    { name: "Barrio Gion", photo: "https://example.com/kyoto3.jpg", duration: 90, likes: 150, hashtags: ["#Gion", "#Geisha", "#Cultura"], city: "67196a8023ba449ec5254760" },
    { name: "Bosque de Bambú", photo: "https://example.com/kyoto4.jpg", duration: 60, likes: 200, hashtags: ["#Arashiyama", "#Bambú", "#Naturaleza"], city: "67196a8023ba449ec5254760" },
    { name: "Castillo Nijō", photo: "https://example.com/kyoto5.jpg", duration: 120, likes: 180, hashtags: ["#Nijo", "#Castillo", "#Historia"], city: "67196a8023ba449ec5254760" },

    // Sydney
    { name: "Ópera de Sídney", photo: "https://example.com/sydney1.jpg", duration: 120, likes: 400, hashtags: ["#Ópera", "#Arquitectura", "#Sydney"], city: "67196a8023ba449ec5254766" },
    { name: "Harbour Bridge", photo: "https://example.com/sydney2.jpg", duration: 90, likes: 250, hashtags: ["#Puente", "#Sydney", "#Aventura"], city: "67196a8023ba449ec5254766" },
    { name: "Bondi Beach", photo: "https://example.com/sydney3.jpg", duration: 150, likes: 300, hashtags: ["#Bondi", "#Playa", "#Australia"], city: "67196a8023ba449ec5254766" },
    { name: "Jardín Botánico Real", photo: "https://example.com/sydney4.jpg", duration: 90, likes: 150, hashtags: ["#JardínBotánico", "#Sydney", "#Naturaleza"], city: "67196a8023ba449ec5254766" },
    { name: "Distrito The Rocks", photo: "https://example.com/sydney5.jpg", duration: 60, likes: 170, hashtags: ["#Historia", "#TheRocks", "#Australia"], city: "67196a8023ba449ec5254766" },

    // Buenos Aires
    { name: "Caminito en La Boca", photo: "https://example.com/buenosaires1.jpg", duration: 120, likes: 220, hashtags: ["#Caminito", "#Arte", "#BuenosAires"], city: "67196a8023ba449ec5254755" },
    { name: "Obelisco y Av. 9 de Julio", photo: "https://example.com/buenosaires2.jpg", duration: 60, likes: 180, hashtags: ["#Obelisco", "#BuenosAires", "#Argentina"], city: "67196a8023ba449ec5254755" },
    { name: "Teatro Colón", photo: "https://example.com/buenosaires3.jpg", duration: 90, likes: 210, hashtags: ["#Teatro", "#Colon", "#Cultura"], city: "67196a8023ba449ec5254755" },
    { name: "Palermo Soho", photo: "https://example.com/buenosaires4.jpg", duration: 150, likes: 150, hashtags: ["#Palermo", "#Arte", "#Diseño"], city: "67196a8023ba449ec5254755" },
    { name: "Museo de Arte Moderno", photo: "https://example.com/buenosaires5.jpg", duration: 60, likes: 140, hashtags: ["#Museo", "#Arte", "#BuenosAires"], city: "67196a8023ba449ec5254755" },

    // Cartagena
    { name: "Murallas de Cartagena", photo: "https://example.com/cartagena1.jpg", duration: 120, likes: 260, hashtags: ["#Murallas", "#Historia", "#Cartagena"], city: "67196a8023ba449ec5254757" },
    { name: "Castillo de San Felipe", photo: "https://example.com/cartagena2.jpg", duration: 90, likes: 190, hashtags: ["#Castillo", "#SanFelipe", "#Colombia"], city: "67196a8023ba449ec5254757" },
    { name: "Barrio Getsemaní", photo: "https://example.com/cartagena3.jpg", duration: 60, likes: 170, hashtags: ["#Getsemani", "#Cultura", "#Cartagena"], city: "67196a8023ba449ec5254757" },
    { name: "Plaza de Santo Domingo", photo: "https://example.com/cartagena4.jpg", duration: 45, likes: 120, hashtags: ["#Plaza", "#SantoDomingo", "#Cartagena"], city: "67196a8023ba449ec5254757" },
    { name: "Islas del Rosario", photo: "https://example.com/cartagena5.jpg", duration: 180, likes: 300, hashtags: ["#Islas", "#Playas", "#Caribe"], city: "67196a8023ba449ec5254757" },

    // Dubai
    { name: "Burj Khalifa", photo: "https://example.com/dubai1.jpg", duration: 90, likes: 500, hashtags: ["#BurjKhalifa", "#Rascacielos", "#Dubai"], city: "67196a8023ba449ec525475a" },
    { name: "Palm Jumeirah", photo: "https://example.com/dubai2.jpg", duration: 120, likes: 340, hashtags: ["#PalmJumeirah", "#Dubai", "#Lujo"], city: "67196a8023ba449ec525475a" },
    { name: "Desierto de Dubái", photo: "https://example.com/dubai3.jpg", duration: 180, likes: 400, hashtags: ["#Desierto", "#Aventura", "#Dubai"], city: "67196a8023ba449ec525475a" },
    { name: "Dubai Mall", photo: "https://example.com/dubai4.jpg", duration: 150, likes: 250, hashtags: ["#DubaiMall", "#Compras", "#Lujo"], city: "67196a8023ba449ec525475a" },
    { name: "Acuario de Dubái", photo: "https://example.com/dubai5.jpg", duration: 90, likes: 300, hashtags: ["#Acuario", "#Familia", "#Dubai"], city: "67196a8023ba449ec525475a" },

    // Prague
    { name: "Castillo de Praga", photo: "https://example.com/prague1.jpg", duration: 180, likes: 280, hashtags: ["#Castillo", "#Historia", "#Praga"], city: "67196a8023ba449ec5254763" },
    { name: "Puente de Carlos", photo: "https://example.com/prague2.jpg", duration: 60, likes: 220, hashtags: ["#PuenteCarlos", "#Cultura", "#Praga"], city: "67196a8023ba449ec5254763" },
    { name: "Reloj Astronómico", photo: "https://example.com/prague3.jpg", duration: 30, likes: 200, hashtags: ["#Reloj", "#Astronómico", "#Praga"], city: "67196a8023ba449ec5254763" },
    { name: "Barrio Judío", photo: "https://example.com/prague4.jpg", duration: 90, likes: 130, hashtags: ["#Judío", "#Historia", "#Praga"], city: "67196a8023ba449ec5254763" },
    { name: "Catedral de San Vito", photo: "https://example.com/prague5.jpg", duration: 120, likes: 180, hashtags: ["#Catedral", "#SanVito", "#Praga"], city: "67196a8023ba449ec5254763" },

    // Krakow
    { name: "Castillo de Wawel", photo: "https://example.com/krakow1.jpg", duration: 90, likes: 150, hashtags: ["#Wawel", "#Historia", "#Krakow"], city: "67196a8023ba449ec5254761" },
    { name: "Plaza del Mercado", photo: "https://example.com/krakow2.jpg", duration: 60, likes: 110, hashtags: ["#Plaza", "#Mercado", "#Cultura"], city: "67196a8023ba449ec5254761" },
    { name: "Fábrica de Schindler", photo: "https://example.com/krakow3.jpg", duration: 120, likes: 190, hashtags: ["#Schindler", "#Historia", "#Krakow"], city: "67196a8023ba449ec5254761" },
    { name: "Barrio Judío Kazimierz", photo: "https://example.com/krakow4.jpg", duration: 90, likes: 160, hashtags: ["#Kazimierz", "#Cultura", "#Krakow"], city: "67196a8023ba449ec5254761" },
    { name: "Minas de Sal de Wieliczka", photo: "https://example.com/krakow5.jpg", duration: 180, likes: 250, hashtags: ["#MinasDeSal", "#Aventura", "#Krakow"], city: "67196a8023ba449ec5254761" },

    // Córdoba
    { name: "Mezquita-Catedral", photo: "https://example.com/cordoba1.jpg", duration: 120, likes: 250, hashtags: ["#MezquitaCatedral", "#Córdoba", "#Historia"], city: "67196a8023ba449ec5254758" },
    { name: "Puente Romano", photo: "https://example.com/cordoba2.jpg", duration: 45, likes: 180, hashtags: ["#PuenteRomano", "#Córdoba", "#Patrimonio"], city: "67196a8023ba449ec5254758" },
    { name: "Barrio de la Judería", photo: "https://example.com/cordoba3.jpg", duration: 90, likes: 160, hashtags: ["#Judería", "#Historia", "#Cultura"], city: "67196a8023ba449ec5254758" },
    { name: "Alcázar de los Reyes Cristianos", photo: "https://example.com/cordoba4.jpg", duration: 60, likes: 140, hashtags: ["#Alcázar", "#Córdoba", "#Historia"], city: "67196a8023ba449ec5254758" },
    { name: "Festival de los Patios", photo: "https://example.com/cordoba5.jpg", duration: 120, likes: 300, hashtags: ["#Patios", "#Córdoba", "#Flores"], city: "67196a8023ba449ec5254758" },

    // Dubrovnik
    { name: "Murallas de Dubrovnik", photo: "https://example.com/dubrovnik1.jpg", duration: 90, likes: 310, hashtags: ["#Murallas", "#Dubrovnik", "#Patrimonio"], city: "67196a8023ba449ec525475b" },
    { name: "Fortaleza de Lovrijenac", photo: "https://example.com/dubrovnik2.jpg", duration: 60, likes: 180, hashtags: ["#Fortaleza", "#Lovrijenac", "#Historia"], city: "67196a8023ba449ec525475b" },
    { name: "Calle Stradun", photo: "https://example.com/dubrovnik3.jpg", duration: 45, likes: 150, hashtags: ["#Stradun", "#Dubrovnik", "#Cultura"], city: "67196a8023ba449ec525475b" },
    { name: "Isla de Lokrum", photo: "https://example.com/dubrovnik4.jpg", duration: 120, likes: 220, hashtags: ["#Lokrum", "#Naturaleza", "#Croacia"], city: "67196a8023ba449ec525475b" },
    { name: "Catedral de Dubrovnik", photo: "https://example.com/dubrovnik5.jpg", duration: 60, likes: 130, hashtags: ["#Catedral", "#Historia", "#Cultura"], city: "67196a8023ba449ec525475b" },

    // Mexico City
    { name: "Zócalo y Catedral Metropolitana", photo: "https://example.com/mexico1.jpg", duration: 120, likes: 300, hashtags: ["#Zócalo", "#CDMX", "#Historia"], city: "67196a8023ba449ec5254761" },
    { name: "Museo de Antropología", photo: "https://example.com/mexico2.jpg", duration: 150, likes: 250, hashtags: ["#Antropología", "#Historia", "#México"], city: "67196a8023ba449ec5254761" },
    { name: "Chapultepec", photo: "https://example.com/mexico3.jpg", duration: 180, likes: 200, hashtags: ["#Chapultepec", "#Parque", "#Cultura"], city: "67196a8023ba449ec5254761" },
    { name: "Coyoacán y Casa de Frida Kahlo", photo: "https://example.com/mexico4.jpg", duration: 120, likes: 280, hashtags: ["#Coyoacán", "#FridaKahlo", "#CDMX"], city: "67196a8023ba449ec5254761" },
    { name: "Xochimilco", photo: "https://example.com/mexico5.jpg", duration: 150, likes: 180, hashtags: ["#Xochimilco", "#Trajineras", "#Patrimonio"], city: "67196a8023ba449ec5254761" },

    // Santorini
    { name: "Puesta de sol en Oia", photo: "https://example.com/santorini1.jpg", duration: 60, likes: 500, hashtags: ["#Oia", "#Santorini", "#Atardecer"], city: "67196a8023ba449ec5254765" },
    { name: "Playas de Perissa y Kamari", photo: "https://example.com/santorini2.jpg", duration: 120, likes: 220, hashtags: ["#Perissa", "#Kamari", "#Playas"], city: "67196a8023ba449ec5254765" },
    { name: "Cata de vinos", photo: "https://example.com/santorini3.jpg", duration: 90, likes: 160, hashtags: ["#Vino", "#Santorini", "#Viñedos"], city: "67196a8023ba449ec5254765" },
    { name: "Excursión al volcán", photo: "https://example.com/santorini4.jpg", duration: 180, likes: 200, hashtags: ["#Volcán", "#Aventura", "#Santorini"], city: "67196a8023ba449ec5254765" },
    { name: "Pueblo de Pyrgos", photo: "https://example.com/santorini5.jpg", duration: 60, likes: 140, hashtags: ["#Pyrgos", "#Cultura", "#Grecia"], city: "67196a8023ba449ec5254765" },

    // Vancouver
    { name: "Parque Stanley", photo: "https://example.com/vancouver1.jpg", duration: 120, likes: 350, hashtags: ["#StanleyPark", "#Naturaleza", "#Vancouver"], city: "67196a8023ba449ec5254767" },
    { name: "Puente Colgante de Capilano", photo: "https://example.com/vancouver2.jpg", duration: 90, likes: 200, hashtags: ["#Capilano", "#Aventura", "#Puente"], city: "67196a8023ba449ec5254767" },
    { name: "Granville Island", photo: "https://example.com/vancouver3.jpg", duration: 60, likes: 180, hashtags: ["#Granville", "#Mercado", "#Cultura"], city: "67196a8023ba449ec5254767" },
    { name: "Museo de Antropología", photo: "https://example.com/vancouver4.jpg", duration: 90, likes: 140, hashtags: ["#Museo", "#Antropología", "#Cultura"], city: "67196a8023ba449ec5254767" },
    { name: "Distrito Yaletown", photo: "https://example.com/vancouver5.jpg", duration: 60, likes: 150, hashtags: ["#Yaletown", "#Historia", "#Vancouver"], city: "67196a8023ba449ec5254767" },

    // Hanoi
    { name: "Casco antiguo de Hanoi", photo: "https://example.com/hanoi1.jpg", duration: 90, likes: 200, hashtags: ["#CascoAntiguo", "#Cultura", "#Hanoi"], city: "67196a8023ba449ec525475f" },
    { name: "Templo de la Literatura", photo: "https://example.com/hanoi2.jpg", duration: 60, likes: 180, hashtags: ["#Templo", "#Literatura", "#Vietnam"], city: "67196a8023ba449ec525475f" },
    { name: "Lago Hoan Kiem", photo: "https://example.com/hanoi3.jpg", duration: 45, likes: 160, hashtags: ["#Lago", "#HoanKiem", "#Naturaleza"], city: "67196a8023ba449ec525475f" },
    { name: "Museo de Etnología", photo: "https://example.com/hanoi4.jpg", duration: 120, likes: 140, hashtags: ["#Etnología", "#Historia", "#Vietnam"], city: "67196a8023ba449ec525475f" },
    { name: "Pagoda del Pilar Único", photo: "https://example.com/hanoi5.jpg", duration: 30, likes: 100, hashtags: ["#Pagoda", "#Hanoi", "#Vietnam"], city: "67196a8023ba449ec525475f" },

    // Oaxaca
    { name: "Monte Albán", photo: "https://example.com/oaxaca1.jpg", duration: 120, likes: 300, hashtags: ["#MonteAlbán", "#Historia", "#Oaxaca"], city: "67196a8023ba449ec5254762" },
    { name: "Centro Histórico", photo: "https://example.com/oaxaca2.jpg", duration: 90, likes: 200, hashtags: ["#CentroHistórico", "#Cultura", "#Oaxaca"], city: "67196a8023ba449ec5254762" },
    { name: "Mercado de Benito Juárez", photo: "https://example.com/oaxaca3.jpg", duration: 60, likes: 150, hashtags: ["#Mercado", "#Gastronomía", "#Oaxaca"], city: "67196a8023ba449ec5254762" },
    { name: "Hierve el Agua", photo: "https://example.com/oaxaca4.jpg", duration: 120, likes: 220, hashtags: ["#HierveElAgua", "#Naturaleza", "#Oaxaca"], city: "67196a8023ba449ec5254762" },
    { name: "Fábrica de Mezcal", photo: "https://example.com/oaxaca5.jpg", duration: 90, likes: 170, hashtags: ["#Mezcal", "#Cultura", "#Oaxaca"], city: "67196a8023ba449ec5254762" },

    // Salzburg
    { name: "Fortaleza de Hohensalzburg", photo: "https://example.com/salzburg1.jpg", duration: 120, likes: 250, hashtags: ["#Hohensalzburg", "#Historia", "#Salzburgo"], city: "67196a8023ba449ec5254764" },
    { name: "Casa de Mozart", photo: "https://example.com/salzburg2.jpg", duration: 60, likes: 190, hashtags: ["#Mozart", "#Historia", "#Música"], city: "67196a8023ba449ec5254764" },
    { name: "Palacio y Jardines de Mirabell", photo: "https://example.com/salzburg3.jpg", duration: 90, likes: 220, hashtags: ["#Mirabell", "#Jardines", "#Salzburgo"], city: "67196a8023ba449ec5254764" },
    { name: "Catedral de Salzburgo", photo: "https://example.com/salzburg4.jpg", duration: 60, likes: 180, hashtags: ["#Catedral", "#Salzburgo", "#Arquitectura"], city: "67196a8023ba449ec5254764" },
    { name: "Getreidegasse", photo: "https://example.com/salzburg5.jpg", duration: 45, likes: 130, hashtags: ["#Getreidegasse", "#Compras", "#Cultura"], city: "67196a8023ba449ec5254764" },

];

Itinerary.insertMany(itineraries);