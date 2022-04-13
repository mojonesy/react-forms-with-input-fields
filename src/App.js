import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
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




function App() {
  return (
    <>
      <Header />
        <WelcomeBack name="Molly" adjective="anxious" country="Norway"/>
        <WelcomeBack />
      <Footer />
    </>
  );
}



export default App;
