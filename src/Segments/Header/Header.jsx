import { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Header = ({cartData}) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
        .then(({data}) => setCategory(data))
    }, [])
    return (
        <header>
            <div className="container header-container">
                <h1><Link to='/'>Shop</Link></h1>
                <nav>
                    {
                        category.map(item => {
                            return <Link key={item} to={`/category/${item}`}>{item}</Link>
                        })
                    }
                   <Link to={'/'}>Home</Link>
                    { cartData.length === 0
                    ? <Link to={'/cart'}>Cart</Link>
                    : <Link  to={'/cart'}>Cart  {
                        cartData.reduce((acc, rec) => {
                            return acc + rec.count
                        }, 0)
                    }</Link>
                }


                </nav>
            </div>
        </header>
    );
}

export default Header;
