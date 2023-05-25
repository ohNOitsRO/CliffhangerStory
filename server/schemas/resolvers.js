const { AuthenticationError } = require('apollo-server-express');
const { Profile, Story, Continuations } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    myStories: async (parent, { email }, context) => {
      if (context.user) {
        return Story.find({
          where: {
            user_email: email
          }
        })
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    publicStories: async (parent, args, context) => {
      console.log(context.user);
      console.log("shaqattack");
      if (context.user) {

      const stories = await Story.find({
        where: {
          author_id: {
            $ne: context.user._id,
          },
          story_type: "open"
        }
      }).populate("author_id")
      console.log(stories);
      return stories;
    }
    throw new AuthenticationError('You need to be logged in!');
    },



  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {

      const profile = await Profile.findOne({ email });
      console.log(profile)

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addStory: async (parent, args, context) => {
      
      if (context.user) {
        args.author_id = context.user.id
        return Story.create(args);

      }
    },

    addCont: async (parent, { main_story, main_author, cont_name, cont_author }, context) => {
      console.log(main_story, main_author, cont_name, cont_author);
      if (context.user) {
        return Continuations.create(
          {
            main_story,
            main_author,
            cont_name,
            cont_author
          }
        );

      }
    },



    removeStory: async (parent, { story_id }, context) => {
      if (context.user) {
        return Profile.findOneAndDelete(
          { _id: context.user._id },
          { $pull: { myStories: { story_id } } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;