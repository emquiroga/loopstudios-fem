import Navbar from "./Navbar";

const Header = () => {
  const CONTENT = ["IMMERSIVE", "EXPERIENCES", "THAT", "DELIVER"];
  return (
    <header>
      <Navbar />
      <div className="container">
        {CONTENT.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </header>
  );
};

export default Header;
