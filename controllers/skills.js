
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create, 
    delete: deleteSkill
  };
  
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
       
    });
}

function show(req, res){
    // console.log(req.params, "req.params in show route")
    res.render("skills/show", {
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req, res){
    res.render("skills/new")
}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req,res){
    
}