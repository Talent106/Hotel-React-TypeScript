import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch } from '@/hooks';
import NewsLetter from '@/components/Landing/NewsLetter';
import { registerRequest } from '@/actions/App';
import '@/assets/scss/views/Auth/Register.scss';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conform, setConform] = useState('');
    const dispatch = useAppDispatch();

    const handleRegister = () => {
        if (email && password && conform) {
            if (password == conform) {
                dispatch(registerRequest({ email, password }));
            } else {
                toast.error("Please check your password...");
            }
        } else {
            toast.error("Please enter your value...");
        }
    }

    return (
        <div className='register'>
            <h3 className='bold capslock'>New Account</h3>
            <div className='content'>
                <Form.Group className="mb-3 w-30">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        id="email"
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-30">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        id="password"
                        defaultValue={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-30">
                    <Form.Label>Conform:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter conform"
                        id="conform"
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
            <ToastContainer />
        </div>
    )
}

export default Register;