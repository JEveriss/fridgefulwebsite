const team = [
  {
    id: 1,
    name: "Antonio",
    words:
      "Antonio was born and raised. Since then he has been accredited with creating the Latin language",
    image: require ("../../assets/antonio.jpeg"),
    link: "https://github.com/ajsevillano",
  },

  {
    id: 2,
    name: "Sunny",
    words:
      "Sunny once lost alegal battle with Starbucks in which she accused the coffee giant of stealing her recipe for the 'flat white'.",
    image: require ("../../assets/sunny.jpeg"),
    link: "https://github.com/Hyosssssun",
  },

  {
    id: 3,
    name: "Ciprian",
    words:
      "Ciprian (chip-ree-un) was key in selecting many of Romania's entries to the Eurovision song contest.",
    image: require ("../../assets/ciprian.jpg"),
    link: "https://github.com/21ciprian",
  },

  {
    id: 4,
    name: "Victoria",
    words:
      "Victoria has spent most of her adult life caring for stray children in central Madrid.",
    image: require ("../../assets/victoria.png"),
    link: "https://github.com/Victoriam97",
  },

  {
    id: 5,
    name: "Maxi",
    words:
      "Maxi is said to be between 18 and 104 years old. However there is little evidence to prove either",
    image: require ("../../assets/maxi.png"),
    link: "https://github.com/maximilianosinopoli",
  },

  {
    id: 6,
    name: "Jacques",
    words:
      "Jacques - noun: someone or something that is marked by consistently or thoroughly bad quality, performance, etc.",
    image: require ("../../assets/jacques.jpg"),
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
