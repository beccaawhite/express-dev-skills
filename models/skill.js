const skills = [
    {id: 329283, skill: "Roller Skating", learned: true},
    {id: 293819, skill: "Surfing", learned: false},
    {id: 329233, skill: "Rock Climbing", learned: true},
    {id: 938283, skill: "Beatbox Flute", learned: true},
    {id: 826319, skill: "Cliff Diving", learned: false},

]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll(){
    return skills
}

function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New skills wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}