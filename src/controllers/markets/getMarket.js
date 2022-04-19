import { MarketModel } from "database/models/market";

const getMarket = async (address) => {
	const market = await MarketModel.findOne({
		address,
	});

	if (!market) {
		throw "market DNE";
	}

	return market;
};

export default getMarket;
