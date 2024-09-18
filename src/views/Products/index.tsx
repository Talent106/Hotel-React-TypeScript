import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '@/hooks';
import '@/assets/scss/views/Products/Products.scss';

const Products: React.FC = () => {
    const [select, setSelect] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [cut, setCut] = useState(0);
    const [quantity, setQuantity] = useState('');
    const dispatch = useAppDispatch();

    const handleProducts = () => {
        if (select && title && price && quantity) {
            dispatch(productsRequest({ select, title, price, cut, quantity }));
        } else {
            toast.error("Please check your value...");
        }
    }

    return (
        <div className='products'>
            <div className='products-content'>
                <h1 className='bold capslock mb-4'>Add Products</h1>
                <div className='d-flex mb-4'>
                    <Form.Select
                        aria-label="Default select example"
                        defaultValue={select}
                        onChange={e => setSelect(e.target.value)}
                    >
                        <option>Open this select menu</option>
                        <option value="1">Corsa</option>
                        <option value="2">Natures Choice</option>
                        <option value="3">Bella Pet Mats</option>
                    </Form.Select>
                    <Form.Control
                        className='ms-4'
                        type="text"
                        placeholder="Enter the product's title"
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className='d-flex mb-4'>
                    <InputGroup>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Enter the price"
                            defaultValue={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="ms-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Enter the cut price"
                            defaultValue={cut}
                            onChange={e => setCut(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="ms-3">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="Enter the quantity"
                            defaultValue={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </InputGroup>
                </div>
                <div className='d-flex mb-4 flex-end'>
                    <Button
                        variant="danger"
                        onClick={handleProducts}
                    >
                        Submit
                    </Button>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Products;