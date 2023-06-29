/* eslint-disable react/no-unescaped-entities */
import Card from "./Card.jsx";
import person1 from "../../assets/opinions/person1.jpeg";
import person2 from "../../assets/opinions/person2.jpeg";
import person3 from "../../assets/opinions/person3.jpeg";
export default function Opinions() {
  const opinions = [
    {
      name: "Alexa Liras",
      image: person1,
      text: "We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.",
    },
    {
      name: "Laurent Perrier",
      image: person2,
      text: "There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.",
    },
    {
      name: "Michael Levi",
      image: person3,
      text: "It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn’t matter. Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.",
    },
  ];
  return (
    <div className="p-2">
      <h3 className="my-10 text-center text-3xl font-bold md:text-left">
        Our member's opinion{" "}
      </h3>
      <div className="grid  grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {opinions.map(({ name, image, text }) => (
          <Card name={name} image={image} text={text} key={name} />
        ))}
      </div>
    </div>
  );
}
