// import "./WelcomeBack.css";


function WelcomeBack({ name = "person", adjective = "nice", country = "Peru"}) {
  const pStyle = {
    color: "black",
    fontFamily: "Zen Dots, cursive",  //cursive is the fallback font
  };
  const userName = {
    fontFamily: "cursive",
    padding: "2px 4px",
    marginRight: "2px",
    backgroundColor: "darkblue",
    color: "#fff",
    borderRadius: "4px",
  };

    return (
      <p style={pStyle}>
        Welcome back {adjective} <span style={userName}>{name}</span> from {country} :)
      </p>
    );
  }

export default WelcomeBack;