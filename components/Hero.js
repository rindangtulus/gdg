import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
var heroData = [
  {
    id: 1,
    image: require("../assets/images/IMG-20241116-WA0038.jpg"),
    teks: "FIrst time joined GDG event !",
  },
  {
    id: 2,
    image: require("../assets/images/IMG_20241003_170350.jpg"),
    teks: "Hangout time!",
  },
  {
    id: 3,
    image: require("../assets/images/IMG_20250116_191500.jpg"),
    teks: "Late night with Rahma",
  },
  {
    id: 4,
    image: require("../assets/images/IMG_20250123_121612.jpg"),
    teks: "First time Photobooth with Rahma !!",
  },
  {
    id: 5,
    image: require("../assets/images/IMG_20241204_125246.jpg"),
    teks: "Agile teknik day",
  },
  {
    id: 6,
    image: require("../assets/images/IMG-20241221-WA0059.jpg"),
    teks: "Going to cosplay event with friends",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel fade>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <div>
                <img
                  className="d-block w-100 roundedborder hero-img"
                  src={hero.image}
                />

                <Carousel.Caption>
                  <h1 style={{ fontWeight: 100 }}>Moments:</h1>
                  <h2 style={{ fontWeight: 100 }}>{hero.teks}</h2>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
