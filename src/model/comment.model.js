import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        text : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)


const Comment = mongoose.model("Comment", commentSchema);
export default Comment