const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const contSchema = new Schema({
    main_story: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Story"
    },
    main_author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Profile"
    },
    cont_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    cont_author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:"Profile"
    },
    created_on: {
        type: Date,
        default: Date.now 
        
    },
    is_deleted: {
        type: Boolean
    }

})