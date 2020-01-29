const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    creator:{
        type: Object,
        required: String
    }
},
    {timestamps: true}
);

model.exports = mongoose.model('Post', postSchema);