import "./Greeting.css";

function Greeting({lang}) {
    switch (lang) {
        case "es":
            return <p>Hola amigué!</p>;
        case "fr":
            return <p>Bonjour mon ami!</p>;
        case "en":
        default:
            return <p>Hello friend!</p>;
    }
}

export default Greeting;