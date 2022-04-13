import "./WelcomeBack.css";


function WelcomeBack({ name = "person", adjective = "nice", country = "Peru"}) {
    return <p>Welcome back {adjective} {name} from {country} :)</p>;
  }

export default WelcomeBack;