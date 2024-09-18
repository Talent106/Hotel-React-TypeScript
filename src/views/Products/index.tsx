import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useAppDispatch } from '@/hooks';
import { productsRequest } from '@/actions/products';
import '@/assets/scss/views/Products/Products.scss';

const Products: React.FC = () => {
    const [select, setSelect] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [cut, setCut] = useState('');
    const [quantity, setQuantity] = useState('');
    const dispatch = useAppDispatch();

    const handleProducts = () => {
        const numericPrice = parseFloat(price);
        const numericCut = cut ? parseFloat(cut) : 0; // Optional field
        const numericQuantity = parseInt(quantity, 10);

        if (select == '') {
            toast.warning("Please select the menu");
        } else {
            if (title && !isNaN(numericPrice) && !isNaN(numericQuantity)) {
                dispatch(productsRequest({
                    select,
                    title,
                    price: numericPrice,
                    cut: numericCut,
                    quantity: numericQuantity
                }));
            } else {
                toast.error("Please check your value...");
            }
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
                        <option value=''>Open this select menu</option>
                        <option value="Corsa">Corsa</option>
                        <option value="Natures Choice">Natures Choice</option>
                        <option value="Bella Pet Mats">Bella Pet Mats</option>
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