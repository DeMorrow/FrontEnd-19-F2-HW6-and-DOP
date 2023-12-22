import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../../Segments/Card/Card';

const Category = ({ buyFunc }) => {
    const [product, setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        setProduct([])
        axios(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(({ data }) => setProduct( data ))
    }, [params]);
    return (
        product.length == 0
        ? <div className='preloader'>
            <div class="lds-dual-ring"></div>
            <h1 className='abs'>Loading...</h1>
        </div>
        :
        <section>
            <div className="container">
                <div className='row'>
                    {

                        product.map((item) => {
                            return (
                                <div key={item.id} className='col-4'>
                                    <Card buyFunc={buyFunc} item={item} />
                                </div>
                            );
                        })
                    }
                </div>
                 </div>
        </section>
    );
}

export default Category;
