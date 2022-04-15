import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Greeting from "./Greeting";
import Quote from "./Quote";
import ToDo from "./ToDo";
import Inventory from "./Inventory";
import Footer from "./Footer";

// function App() {
//   const name = "Molly";
//   const url = "https://www.thinkful.com/";
//   const linkText = "Thinkful";
//   const element = (
//     <>
//       <h1>Hello World!</h1>
//       <h2>Have a good day.</h2>
//       <hr />
//         <p className='paragraph'>
//           Hello {name}! Please visit <a href = {url}>{linkText}</a>.
//         </p>
//       <img src="./public/favicon.ico" alt="React Logo" width="40px" />
//     </>
//   );

//   return element;
// }


const quote = {
  text: "Goodbye Winnie!",
  author: "Muriel F. Haggerty",
};

function App() {
  return (
    <>
      <Header />
        <WelcomeBack name="Molly" adjective="anxious" country="Norway"/>
        <WelcomeBack />
        <Greeting lang="fr" />
        <Greeting lang="es" />
        <Quote quote={quote} />
        <ToDo />
        <Inventory />
      <Footer />
    </>
  );
}



export default App;
