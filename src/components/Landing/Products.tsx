import React from 'react';
import '@/assets/scss/components/Landing/Products.scss';

interface ProductsItem {
    img: string;
    brand?: string;
    title: string;
    review: string;
    price: string;
    btn: string;
    icon?: string;
}

interface ProductsProps {
    ProductsItems: ProductsItem[];
}

const Products: React.FC<ProductsProps> = ({ ProductsItems }) => {
    return (
        <div className="product">
            <h1>Featured Products</h1>
            <div className="gallery">
                {ProductsItems.map((item, index) => (
                    <div className="card w-20rem m-3" key={index}>
                        <img src={item.img} className="card-img-top" alt="Image" />
                        <div className="card-body">
                            {item.brand &&
                                <p className="brand-name">{ item.brand }</p>
                            }
                            <h5 className="card-title bold">{ item.title }</h5>
                            <div className="d-flex">
                                <div className="star text-danger">
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                </div>
                                <span className="light-black-4">{ item.review }</span>
                            </div>
                            <h5 className="bold my-3">
                                ${ item.price }
                            </h5>
                            <a href="#" className="btn btn-outline-danger bold capslock w-100">
                                {item.icon &&
                                    <i className={item.icon}></i>
                                }
                                { item.btn }
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products;