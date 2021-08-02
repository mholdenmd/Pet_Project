const mongoose = require ('mongoose');


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required :[true, "A pet name is required"],
        minlength: [2, "A pet name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true , "Pet Type is required!"],
        minlength: [2, "Pet type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Please fill out desciption field"],
        minlength: [2, "A pet decription must be at least 3 characters"]
    },
    skill1: {
        type: String,
        
    },
    skill2: {
        type: String,
        
    },
    skill3: {
        type: String,
        
    },

})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;