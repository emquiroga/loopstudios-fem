const Card = () => {
  const CARDS = [
    {
      url: "../assets/images/mobile/image-deep-earth.jpg",
      text: "Deep Earth",
    },
    {
      url: "../assets/images/mobile/image-night-arcade.jpg",
      text: "Night Arcade",
    },
    {
      url: "../assets/images/mobile/image-soccer-team.jpg",
      text: "Soccer Team VR",
    },
    { url: "../assets/images/mobile/image-grid.jpg", text: "The Grid" },
    {
      url: "../assets/images/mobile/image-from-above.jpg",
      text: "From Up Above VR",
    },
    {
      url: "../assets/images/mobile/image-pocket-borealis.jpg",
      text: "Pocket Borealis",
    },
    {
      url: "../assets/images/mobile/image-curiosity.jpg",
      text: "The Curiosity",
    },
    {
      url: "../assets/images/mobile/image-fisheye.jpg",
      text: "Make it Fisheye",
    },
  ];
  return (
    <>
      {CARDS.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={card.url} className="creation-img" alt="Creation" />
            <p className="creation-text">{card.text}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
