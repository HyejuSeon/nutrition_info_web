import { Schema, model } from "mongoose";

const GraphSchema = new Schema({
  graphId: {
    type: String,
    required: true,
  },
  graphName: {
    type: String,
    required: true,
  },
  graphFilePath: {
    type: String,
    required: true,
  },
  nutrients: {
    type: Array,
    default: ["calories", "protein", "fat", "satFat", "fiber", "carbs"],
  },
});

const GraphModel = model("Graph", GraphSchema);

export { GraphModel };
