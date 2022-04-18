import React from "react";
import { useState } from "react";

function SubscriberForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleNameChange = (event) => setName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    console.log('Current Value of name: ', name);
    console.log('Current value of email: ', email);

    return (
        <form>
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
        </form>
    );
}

export default SubscriberForm;