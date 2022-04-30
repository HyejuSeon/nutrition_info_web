import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    loginId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
      required: false,
      default: "",
    },
    sex: {
      type: String,
      required: false,
      default: "",
    },
    phoneNumber: {
      type: String,
      required: false,
      default: "",
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);

export { UserModel };
