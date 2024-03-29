import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MarketSchema = new Schema({
	name: String,
	symbol: String,
	description: String,
	address: String,
	chain: String,
	owner: String,
	catalog: mongoose.Types.ObjectId,
	logo: String,
	banner: String,
	discord: String,
	website: String,
	twitter: String,
	instagram: String,
});

const MarketModel = mongoose.model("Market", MarketSchema);

export { MarketSchema, MarketModel };
