import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);
export default Service;
