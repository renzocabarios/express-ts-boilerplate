import mongoose from "mongoose";
import { RESOURCE } from "../../constant";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
});

export default mongoose.model(RESOURCE.SAMPLE, schema);
