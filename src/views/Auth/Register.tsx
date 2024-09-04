import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NewsLetter from '@/components/Landing/NewsLetter';
import '@/assets/scss/views/Auth/Register.scss';

const Register: React.FC = () => {
    return (
        <div className='register'>
            <h3 className='bold capslock'>New Account</h3>
            <div className='content'>
                <Form.Group className="mb-3 w-30" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-30" controlId="formBasicEmail">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Form.Group className="mb-3 w-30" controlId="formBasicEmail">
                    <Form.Label>Conform:</Form.Label>
                    <Form.Control type="password" placeholder="Enter conform" />
                </Form.Group>
            </div>

            <div className='w-100 my-3 content-center'>
                <Button
                    variant="danger w-30 mt-3 capslock bold"
                    type="submit"
                >
                    Create account
                </Button>
            </div>

            <NewsLetter />
        </div>
    )
}

export default Register;