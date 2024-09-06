import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NewsLetter from '@/components/Landing/NewsLetter';
import '@/assets/scss/views/Auth/Login.scss';

const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className='login'>
            <div className="content my-3">
                <div className="login-form w-30 me-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" id="password" placeholder="Enter password" />
                    </Form.Group>

                    <div className="btn-form mt-3">
                        <Button variant="danger capslock bold" type="submit">
                            Sing In
                        </Button>
                        <a>Forgot your password?</a>
                    </div>
                </div>
                <div className="customer ms-4">
                    <h5 className="bold capslock">New Customer?</h5>
                    <div className="flex-d f-13 my-3 light-black-4">
                        <span>Create an account with us and you'll be able to:</span>
                        <li>Check out faster</li>
                        <li>Save multiple shipping addresses</li>
                        <li>Access your order history</li>
                        <li>Track new orders</li>
                        <li>Save items to your Wish List</li>
                    </div>
                    <Button
                        variant="primary mt-3 capslock bold"
                        type="submit"
                        onClick={() => navigate("/register")}
                    >
                        Create account
                    </Button>
                </div>
            </div>

            <NewsLetter />
        </div>
    )
}

export default Login;