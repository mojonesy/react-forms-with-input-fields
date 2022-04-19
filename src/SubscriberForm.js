import React from "react";
import { useState } from "react";

// function SubscriberForm({ createSubscriber }) {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const handleNameChange = (event) => setName(event.target.value);
//     const handleEmailChange = (event) => setEmail(event.target.value);
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Submitted: ', name, email);
//         createSubscriber({name, email});
//         setName('');
//         setEmail('');
//     };
//     console.log('Current Value of name: ', name);
//     console.log('Current value of email: ', email);

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor='name'>
//                 Enter Your Name:
//                 <input
//                     type='text'
//                     id='name'
//                     name='name'
//                     onChange={handleNameChange}
//                     value={name}
//                 />
//             </label>
//             <label htmlFor='email'>
//                 Your Email:
//                 <input
//                     type='email'
//                     id='email'
//                     name='email'
//                     onChange={handleEmailChange}
//                     value={email}
//                 />
//             </label>
//             <button type="Submit">Submit</button>
//         </form>
//     );
// }



function SubscriberForm() {
    const initialFormState = {
        name: "Molly",
        email: "",
        referral: "youtube",
        age: "",
        subscription: true,
    };
    const [formData, setFormData] = useState({ ...initialFormState});
    const handleChange = ({ target }) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({ ...formData, [target.name]: value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted: ", formData);
        setFormData({ ...initialFormState});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Your Name:
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
            />
            </label>
                <br />
            <label htmlFor="email">
                Your Email:
                <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                />
            </label>
            <br />
            <label htmlFor="referral">
                How did you hear about us?
                <select
                    id="referral"
                    name="referral"
                    onChange={handleChange}
                    value={formData.referral}
                >
                    <option value="">-- Select an Option --</option>
                    <option value="twitter">Twitter</option>
                    <option value="wom">Word of Mouth</option>
                    <option value="youtube">YouTube</option>
                </select>
            </label>
            <br />
            <fieldset>
                <legend>How old are you?</legend>
                <label htmlFor="low">
                    Under 18
                    <input
                    id="low"
                    type="radio"
                    name="age"
                    onChange={handleChange}
                    value="low"
                    checked={formData.age === "low"}
                    />
                </label>
                <label htmlFor="middle">
                    18 - 60
                    <input
                    id="middle"
                    type="radio"
                    name="age"
                    onChange={handleChange}
                    value="middle"
                    checked={formData.age === "middle"}
                    />
                </label>
                <label htmlFor="high">
                    Over 60
                    <input
                    id="high"
                    type="radio"
                    name="age"
                    onChange={handleChange}
                    value="high"
                    checked={formData.age === "high"}
                    />
                </label>
            </fieldset>
            <br />
            <label htmlFor="subscription">
                Receive email notifications?
                <input
                    id="subscription"
                    type="checkbox"
                    name="subscription"
                    onChange={handleChange}
                    checked={formData.subscription}
                    value="subscription"
                />
            </label>
            <br />
            <button type="Submit">Submit</button>
        </form>
    );
}

export default SubscriberForm;