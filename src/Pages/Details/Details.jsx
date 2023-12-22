import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './details.css'

const Details = ({buyFunc}) => {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() =>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setData(data))
    }, [])
    return (
        <section>
            {
                JSON.stringify(data) == '{}'
                ? <div className='preloader'>
                <div class="lds-circle"><div></div></div>
                        <h1 className='abs'>Loading...</h1>
            </div>
            :
                <div className="container">
                <div className="row">
                <div className="col-6">
                    <img src={data.image} alt="" className='detail-img'/>
                </div>
                <div className="col-6">
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <p><b>category:</b>{data.category}</p>
                    <p><b>price:</b>${data.price}</p>
                    <button onClick={() =>{
                        buyFunc(data)
                    }}>buy</button>
                    <button onClick={() => {
                        navigate(-1);
                    }}>Go Back</button>
                </div>
                </div>
            </div>
            }
        </section>
    );
}

export default Details;
