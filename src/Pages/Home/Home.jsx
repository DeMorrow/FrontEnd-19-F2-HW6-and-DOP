import './home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Segments/Card/Card'


const Home = ({buyFunc}) => {
    const [product, setProduct] = useState([]);

    useEffect(() =>{
        axios(`https://fakestoreapi.com/products`)
        .then(({data}) => {
            console.log(data);
            setProduct(data)
        })
    }, [])
    return (
        <section>
            <div className="container">
            <div className='row'>
            {
           product.length == 0
           ? <div className='preloader'>
               <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
               <h1 className='abs'>Back home...</h1>
           </div>
           :
            product.map(item => {
                    return (<div key={item.id} className='col-4'> 
                        <Card buyFunc= {buyFunc} item={item} />
                    </div>);
                })
            }
            </div></div>
        </section>
    );
}

export default Home;
