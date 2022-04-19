import { ProductModel } from "database/models/product";

/* 
productObj: {
    name
    symbol
    owner
    market
    marketAddress
    description
    price
    thumbnail
} */

const createProduct = async (productObj) => {
	const product = await ProductModel.create(productObj);

	return product;
};

export default createProduct;
