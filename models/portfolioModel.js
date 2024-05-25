const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  // about animation url
  lottieUrl: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },

  skills: {
    type: Array,
    required: true,
  },
});

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },

  technologies: {
    type: Array,
    required: true,
  },
});

const languageSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    proficiency: {
      type: String,
      required: true,
    },
  });

const skillsSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    languages: {
      type: [languageSchema],
      required: true,
    },
  });

const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", introSchema),
  About: mongoose.model("abouts", aboutSchema),
  Education: mongoose.model("educations", educationSchema),
  Project: mongoose.model("projects", projectsSchema),
  Contact: mongoose.model("contact", contactSchema),
  Skills: mongoose.model("skills", skillsSchema),
  Languages : mongoose.model("languages",languageSchema),
};
