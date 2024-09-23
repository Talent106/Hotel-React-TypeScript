import React, { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill-new';
import '@/assets/scss/views/Blog/Blog.scss';

const Blog: React.FC = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleEditorChange = (value: string) => {
        setContent(value);
    }

    const handleProducts = () => {
        if (content && title) {

        } else {
            toast.error("Please input your value");
        }
    }

    return (
        <div className='blog'>
            <div className='blog-content'>
                <h1 className='bold capslock'>Blog</h1>
                <Form.Select
                    aria-label="Default select example"
                    className='my-4 w-50'
                    defaultValue={title}
                    onChange={e => setTitle(e.target.value)}
                >
                    <option value=''>Open this select menu</option>
                    <option value="Our Story">Our Story</option>
                    <option value="Quality Control">Quality Control</option>
                </Form.Select>

                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={handleEditorChange}
                />

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

export default Blog;