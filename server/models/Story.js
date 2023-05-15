const { Schema, model } = require('mongoose');

const storySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

//   Email is unique identifier //
  author_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref:"Profile"
  },
  content: {
    type: String,
    required: true,
    minlength: 5
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
    minlength: 5
  },
  contributors: [{
    type: Schema.Types.ObjectId, 
    ref:"Profile"
  }]




});


const Story = model('Story', storySchema);

module.exports = Story;