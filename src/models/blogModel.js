const mongoose = require('mongoose');

const ObjectId= mongoose.Types.ObjectId

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim:true
    },
    body: {
        type: String,
        required: true,
        trim:true
    },
    authorId: {
        type: ObjectId,
        ref: "newAuthor",
        required:true
    },
    tags:[{type:String,trim:true}],
    category: {
        type: String,
        required: true,
        trim:true
    },
    subCategory: [{type:String,trim:true}],
    isDeleted: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    deletedAt: {
                type:Date,
                default:null
            },
    publishedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });

 module.exports = mongoose.model("blog",blogSchema)
