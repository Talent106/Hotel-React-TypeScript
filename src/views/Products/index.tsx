import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '@/assets/scss/views/Products/Products.scss';

const Products: React.FC = () => {
    return (
        <div className='products'>
            <div className='products-content'>
                <h1 className='bold capslock mb-4'>Add Products</h1>
                <div className='d-flex mb-4'>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Corsa</option>
                        <option value="2">Natures Choice</option>
                        <option value="3">Bella Pet Mats</option>
                    </Form.Select>
                    <Form.Control
                        className='ms-4'
                        type="text"
                        placeholder="Enter the product's title"
                    />
                </div>
                <div className='d-flex mb-4'>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Enter the price"
                        />
                    </InputGroup>

                    <InputGroup className="ms-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Enter the cut price"
                        />
                    </InputGroup>

                    <InputGroup className="ms-3">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Enter the quantity"
                        />
                    </InputGroup>
                </div>
                <div className='d-flex mb-4 flex-end'>
                    <Button variant="danger">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Products;