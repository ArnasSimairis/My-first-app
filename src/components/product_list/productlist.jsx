import './productlist.css';

import data from '../../data/data';
import Product from '../product/product';

const ProductsList = () => {

    console.log(data, "tevinis elementas")

    return (
        <div>
            <Product items={data}/>
        </div>
    )
}

export default ProductsList