const { Schema, model } = require('mongoose');

const storySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

//   Email is unique identifier //
  user_email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  content: {
    type: String,
    required: true,
    minlength: 5,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
    minlength: 5,
  },
  contributors: [{
    type: Schema.Types.ObjectId, 
    ref:"Profile"
  }]




});


const Story = model('Story', storySchema);

module.exports = Story;