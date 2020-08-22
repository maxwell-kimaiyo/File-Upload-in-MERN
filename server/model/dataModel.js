import mongoose from 'mongoose';
const fileSchema = new mongoose.Schema({
  image:  {type: String,required: true },
  pdf: { type: String, required: false},
});

const fileModel = mongoose.model("Pagefile", fileSchema);

export default fileModel;