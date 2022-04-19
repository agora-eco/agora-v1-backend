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

const modifyProduct = async (id, productObj) => {
	const product = await ProductModel.findByIdAndUpdate(id, productObj).exec();

	return product;
};

export default modifyProduct;
