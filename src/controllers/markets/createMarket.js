import { MarketModel } from "database/models/market";

/* 
marketObj: {
    name
    symbol
    description
    address
    chain
    owner
    catalog
    logo
    banner
    discord
    website
    twitter
    instagram
} */

const createMarket = async (marketObj) => {
	const market = await MarketModel.create(marketObj);

	return market;
};

export default createMarket;
