const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Skills,
  Education,
  Contact,
  Languages,
} = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const education = await Education.find();

    const projects = await Project.find();
    const contact = await Contact.find();
    const skills = await Skills.find();
    const languages = await Languages.find();

    


    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contact[0],
      educations: education,
      skills : skills,
      languages : languages,
      
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
