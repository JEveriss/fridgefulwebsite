const team = [
  {
    id: 1,
    name: "Antonio",
    words:
      "Antiono already has a portfolio that will rival most established fron end developers despite only being coding for a year. A natural front end developer",
    image: require("../../assets/antonio.jpeg"),
    link: "https://github.com/ajsevillano",
  },

  {
    id: 2,
    name: "Sunny",
    words:
      "Sunny is a optimisitc, forward thinking full stack developer. Her ability to analyse and persist with a problem means it deosn't stay unsolved for very long.",
    image: require("../../assets/sunny.jpeg"),
    link: "https://github.com/Hyosssssun",
  },

  {
    id: 3,
    name: "Ciprian",
    words:
      "Ciprian loves a challenge and will frequently be found helping others with their projects while he has multiple on the go already - a full stack fanatic.",
    image: require("../../assets/ciprian.jpg"),
    link: "https://github.com/21ciprian",
  },

  {
    id: 4,
    name: "Victoria",
    words:
      "Victoria is equally as proficient on the front end as she is the back end. She also posses the amazing ability to extract the best from those she works with.",
    image: require("../../assets/victoria.png"),
    link: "https://github.com/Victoriam97",
  },

  {
    id: 5,
    name: "Maxi",
    words:
      "Maxi is one of the most dilligent back end developers out there. Although they are few and far between, he solves errors and bugs as soon as they are spotted.",
    image: require("../../assets/maxi.png"),
    link: "https://github.com/maximilianosinopoli",
  },

  {
    id: 6,
    name: "Jacques",
    words:
      "Jacques a passionate and dedicated front end developer that has the perseverance to tackle almost any project.",
    image: require("../../assets/jacques.jpg"),
    link: "https://github.com/JEveriss",
  },
];

export function Headshots() {
  return (
    <section className="profile-container">
      {team.map(({ id, name, words, image, link }) => (
        <div id={id} className="profile">
          <a href={link}>
            <img src={image} alt={name}></img>
            <h2>{name}</h2>
          </a>
          <p>{words}</p>
        </div>
      ))}
    </section>
  );
}
