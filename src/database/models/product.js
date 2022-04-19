import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: String,
	symbol: String,
	owner: String,
	market: mongoose.Types.ObjectId,
	marketAddress: String,
	description: String,
	price: String,
	thumbnail: mongoose.Types.ObjectId,
});

const ProductModel = mongoose.model("Product", ProductSchema);

export { ProductSchema, ProductModel };
