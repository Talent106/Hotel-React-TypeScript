import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NewsLetter from '@/components/Landing/NewsLetter';
import '@/assets/scss/views/Auth/Register.scss';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conform, setConform] = useState('');

    const handleRegister = () => {
        if (email && password && conform) {
            if (password == conform) {

            } else {
                
            }
        } else {

        }
    }

    return (
        <div className='register'>
            <h3 className='bold capslock'>New Account</h3>
            <div className='content'>
                <Form.Group className="mb-3 w-30" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        defaultValue={email}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-30" controlId="formBasicEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        defaultValue={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-30" controlId="formBasicEmail">
                    <Form.Label>Conform:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter conform"
                        defaultValue={conform}
                        onChange={e => setConform(e.target.value)}
                    />
                </Form.Group>
            </div>

            <div className='w-100 my-3 content-center'>
                <Button
                    variant="danger w-30 mt-3 capslock bold"
                    type="submit"
                    onClick={handleRegister}
                >
                    Create account
                </Button>
            </div>

            <NewsLetter />
        </div>
    )
}

export default Register;