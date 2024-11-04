import { Schema, model } from "mongoose";

let collection = "itineraries";
let schema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    hashtags: { type: [String] },
    city: { type: Schema.Types.ObjectId, ref: 'cities', required: true }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;