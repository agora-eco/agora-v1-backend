import mongoose from "mongoose";
import chalk from "chalk";

export default async () => {
	try {
		await mongoose.connect(
			//`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_CLUST}.7cnqf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
			process.env.PORT
				? `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUST}.${process.env.MONGO_CODE}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
				: "mongodb://localhost:27017/agora",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log(chalk.green("🔗  Mongodb Up"));
	} catch (err) {
		console.log(chalk.red("💥 Mongodb Down"));
	}
};
