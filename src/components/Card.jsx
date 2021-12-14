const Card = () => {
  const CONTENT = [
    "  Deep \n  Earth",
    "  Night \n  Arcade",
    "  Soccer \n  Team VR",
    "  The \n  grid",
    "  From Up \n  Above VR",
    "  Pocket \n  Borealis",
    "  The \n  Curiosity",
    "  Make it \n  Fisheye",
  ];
  return (
    <>
      {CONTENT.map((text, index) => {
        return (
          <div className="card" key={index}>
            <div className="creation-text">
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
