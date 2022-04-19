import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import restRouter from "./routes/index";

export default async (app) => {
	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(restRouter);

	app.listen(process.env.PORT || 8080, () => {
		console.log(
			`🚀 Atlas server started @ http://localhost:${
				process.env.PORT || 8080
			}`
		);
	});

	return "";
};
