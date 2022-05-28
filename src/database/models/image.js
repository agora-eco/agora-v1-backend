import mongoose from "mongoose";
const Schema = mongoose.Schema;

var imageSchema = new Schema({
	name: String,
	desc: String,
	img: {
		data: mongoose.Types.Buffer,
		contentType: String,
	},
});

const ImageModel = mongoose.model("Image", ImageSchema);

export { ImageModel, ImageSchema };
