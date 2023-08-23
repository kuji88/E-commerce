const mongoose = require("mongoose");

const subCatagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Catagory required"],
      unique: [true, "catagory must be unique"],
      minlength: [3, "Catagory must be min 3 letters"],
      maxlength: [32, "Catagory must be max 32 letters"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
    img: {
      type: String,
    },
    catagory: {
      type: mongoose.Schema.ObjectId,
      ref: "catagory",
      required: [true, "SubCatagory must be belong with MainCatagory"],
    },
  },
  { timestamps: true }
);

const SubModelSchema = mongoose.model("subCatagory", subCatagorySchema);

module.exports = SubModelSchema;
