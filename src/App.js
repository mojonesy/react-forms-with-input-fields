import "./App.css";
import { useState } from "react";
// Components
// import SubscriberList from "./SubscriberList";
import SubscriberForm from "./SubscriberForm";


// function App() {
//   const [subscribers, setSubscribers] = useState([]);

//   const createSubscriber = (newSubscriber) => {
//     setSubscribers((currentSubscribers) => [
//       newSubscriber,
//       ...currentSubscribers
//     ]);
//   }

//   const deleteSubscriber = (indexToDelete) => {
//     setSubscribers((currentSubscribers) => 
//       currentSubscribers.filter((post, index) => index !== indexToDelete)
//     );
//   }

//   return (
//     <div>
//       <SubscriberForm createSubscriber={createSubscriber} />
//       <SubscriberList subscribers={subscribers} deleteSubscriber={deleteSubscriber} />
//     </div>
//   );
// }


function App() {
  return <SubscriberForm />
}


export default App;
