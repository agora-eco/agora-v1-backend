import util from "util";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
	url: "mongodb://localhost:27017/agora",
	options: { useNewUrlParser: true, useUnifiedTopology: true },
	file: (req, file) => {
		const match = ["image/png", "image/jpeg"];

		if (match.indexOf(file.mimetype) === -1) {
			const filename = `${Date.now()}-agora-${file.originalname}`;
			return filename;
		}

		return {
			bucketName: "photos",
			filename: `${Date.now()}-agora-${file.originalname}`,
		};
	},
});

const uploadFiles = multer({ storage: storage }).single("file");
const uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware;
