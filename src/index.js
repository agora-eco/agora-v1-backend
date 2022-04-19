import express from "express";

import "./config.js";
import initDb from "./database";
import initServer from "./server";

const start = async () => {
	const app = express();

	await initDb();
	await initServer(app);
};

start();
