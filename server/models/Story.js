const { Schema, model } = require('mongoose');

const storySchema = new Schema({
  title: {
    type: String,
    required: true,
    // unique: true,
    trim: true
  },
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
    get: (date)=> date.toLocaleDateString(),
    required: true,
    minlength: 5
  },
  contributors: [{
    type: Schema.Types.ObjectId, 
    ref:"Profile"
  }],
  is_deleted: {
    type: Boolean
  },
  story_type: {
    type: String

  }




});


const Story = model('Story', storySchema);

module.exports = Story;