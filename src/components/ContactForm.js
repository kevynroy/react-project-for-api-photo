import React, { useState } from 'react';

const ContactForm = () => {
    // State variables for form fields
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add Logic to handle form suubmission (e.g., sending the data to the backend)
        console.log('Form submitted');;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:',message);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Message</label>
                    <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default ContactForm;