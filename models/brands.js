const mongoose = require("mongoose");

const barnds = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "barnd required"],
      unique: [true, "barnd must be unique"],
      minlength: [3, "barnd must be min 3 letters"],
      maxlength: [32, "barnd must be max 32 letters"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
  },
  { timestamps: true }
);

const barndsModel = mongoose.model("barnds", barnds);

module.exports = barndsModel;
