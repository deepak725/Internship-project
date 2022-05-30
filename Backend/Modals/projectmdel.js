const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        // trim: true
    }, 

    description: {
        type: String,
        required:true,
    },
    proStartingDate:{
        type:String,
        required:true,
    },
    proEndingDate:{
        type:String,
        required:true,
    },
    image: {
        type: String
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;