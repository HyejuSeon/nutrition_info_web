import { Schema, model } from 'mongoose';

const GraphSchema = new Schema (
    {
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
    }
);

const GraphModel = model('Graph', GraphSchema);

export { GraphModel };