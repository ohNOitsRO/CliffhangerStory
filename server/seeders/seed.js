console.log("LINE1");
const db = require('../config/connection');
console.log("LINE3");
const { Profile, Story } = require('../models');
console.log("LINE5");
const profileSeeds = require('./profileSeeds.json');
const storySeeds = require('./storySeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Story.deleteMany({});
    await Story.create(storySeeds);

    console.log('All done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
