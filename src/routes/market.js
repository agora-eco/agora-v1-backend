import { Router } from "express";

import { getMarket, createMarket, modifyMarket } from "controllers/markets";
import { getProduct } from "controllers/products";

const router = Router();

router.get("/:address", async (req, res) => {
	try {
		const { address } = req.params;
		if (!address) {
			throw "missing vals";
		}
		const market = await getMarket(address);

		if (!address) {
			throw "address required";
		}
		if (!market) {
			throw "market DNE";
		}

		return res.status(200).send({ market });
	} catch (err) {
		return res.status(400).send({ err });
	}
});

router.post("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		if (!id) {
			throw "id required";
		}

		if (!req.body.market) {
			throw "no market";
		}

		const market = await modifyMarket(id, req.body.market);

		return res.status(200).send({ market });
	} catch (err) {
		return res.status(400).send({ err });
	}
});

router.post("/", async (req, res) => {
	try {
		if (!req.body.market) {
			throw "no market";
		}

		const market = await createMarket(req.body.market);

		return res.status(200).send({ market });
	} catch (err) {
		return res.status(400).send({ err });
	}
});

router.get("/:address/catalog/:code", async (req, res) => {
	try {
		const { address, code } = req.params;
		if (!address || !code) {
			throw "missing vals";
		}
		const product = await getProduct(address, code);

		return res.status(200).send({ product });
	} catch (err) {
		return res.status(400).send({ err });
	}
});

router.get("/:address/catalog/", async (req, res) => {
	try {
		const { address } = req.params;
		if (!address || !req.body.product) {
			throw "missing vals";
		}
		const product = await createProduct(req.body.product);

		return res.status(200).send({ product });
	} catch (err) {
		return res.status(400).send({ err });
	}
});

router.post("/:address/catalog/:id", async (req, res) => {
	try {
		const { address, id } = req.params;
		if (!address || !id || !req.body.product) {
			throw "missing vals";
		}
		const product = await modifyProduct(id, req.body.product);

		return res.status(200).send({ product });
	} catch (err) {
		return res.status(400).send({ err });
	}
});

export default router;
