import React from "react";
import { useState } from "react";

function SubscriberForm({ createSubscriber }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted: ', name, email);
        createSubscriber({name, email});
        setName('');
        setEmail('');
    };
    console.log('Current Value of name: ', name);
    console.log('Current value of email: ', email);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Enter Your Name:
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleNameChange}
                    value={name}
                />
            </label>
            <label htmlFor='email'>
                Your Email:
                <input
                    type='email'
                    id='email'
                    name='email'
                    onChange={handleEmailChange}
                    value={email}
                />
            </label>
            <button type="Submit">Submit</button>
        </form>
    );
}

export default SubscriberForm;