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

const modifyMarket = async (id, marketObj) => {
	const market = await MarketModel.findById(id, marketObj).exec();

	return market;
};

export default modifyMarket;
