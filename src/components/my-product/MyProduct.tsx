import React from 'react';
import {IProduct} from "../../models/IProduct";

type MyPropsType = {
    product: IProduct
}

const MyProduct:FC<MyPropsType> = ({product}) => {
        return (
            <div>
                    <h3>{product.title}. {product.price} uah</h3>
                    <img src={product.image} alt={product.title}/>
            </div>
        );
}

export default MyProduct;