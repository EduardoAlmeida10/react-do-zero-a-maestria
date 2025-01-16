import { useFetch } from '../hooks/useFetch';
import './Product.css'

import { Link, useParams } from 'react-router-dom'

const Product = () => {

    // 4 - rotas dinamicas

    const { id } = useParams();

    // 5 - carregamento dado individual

    const url = `http://localhost:3000/products/${id}`;

    const { data: product, loading, error } = useFetch(url);

    return (
        <div className='product'>
            <p>ID do produto: {id}</p>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {product &&
                <div>
                    <h2>{product.name}</h2>
                    <p>R$: {product.price}</p>
                    {/* 6 - nested routes */}
                    <Link to={`/products/${id}/info`}>Mais informações</Link>
                </div>
            }
        </div>
    )
}

export default Product