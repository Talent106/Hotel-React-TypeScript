import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Img from '@/assets/img/dog.webp';
import '@/assets/scss/components/Landing/NewsLetter.scss';

const NewsLetter: React.FC = () => {
    return (
        <div className="newsletter">
            <h3 className="bold capslock me-4">Newsletter Signup</h3>
            <InputGroup className="mb-3 mx-4">
                <Form.Control
                    placeholder="Email Addresss *"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="danger bold capslock w-40" id="button-addon2">
                    Subscrbe
                </Button>
            </InputGroup>
            <img src={Img} />
        </div>
    )
}

export default NewsLetter;