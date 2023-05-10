import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
export default mongoose.model("user", userSchema);
//# sourceMappingURL=user.js.map