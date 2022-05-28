import { ProductModel } from "database/models/product";

const getProduct = async (marketAddress, productCode) => {
	const product = await ProductModel.findOne({
		marketAddress,
		code: productCode,
	});

	if (!product) {
		throw "product DNE";
	}

	return product;
};

export default getProduct;
