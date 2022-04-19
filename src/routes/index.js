import { Router } from "express";

import MarketRouter from "./market";
//import ProductRouter from "./product";

const router = Router();

router.use("/market", MarketRouter);
//router.use("/product", ProductRouter);

export default router;
