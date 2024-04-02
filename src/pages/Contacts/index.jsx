import { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"
import emailjs from '@emailjs/browser';
const Contacts = () => {
    const form = useRef();
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [username, setUsername]=useState("")
    const serviceId = "service_ksdbcko"
    const templateId = "template_sh274d5"
    const publicKey = "V7RZGYr1-ksQD8j_V"
    
    const handleInputChange = (event) => {
        const { value, name } = event.target

        if (name === 'email') {
            setEmail(value)
        }
        else if (name === "message") {
            setMessage(value)
        }
        else if (name==="username"){
            setUsername(value)
        }

    }
    const handleFormSubmit = (event) => {
        event.preventDefault()
        emailjs
        .sendForm( serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        
        );
        setEmail("")
        setUsername("")
        setMessage("")
    }
    return (
        <Form ref={form} onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="emailForm.ControlInput1" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" value={email} name='email' onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.ControlInput1" >
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="John Smith" value={username} name='username' onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageForm.ControlTextarea1" >
                <Form.Label>Enter your message here</Form.Label>
                <Form.Control as="textarea" rows={3} value={message} name='message' onChange={handleInputChange} />
            </Form.Group>
            <Button type='submit'>
                Send
            </Button>
        </Form>
    );
}



export default Contacts;