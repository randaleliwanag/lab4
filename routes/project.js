exports.viewProject = function(req, res){
    var name = req.params.name;
    console.group("The project name is: " + name);
    res.render("project", {
        "projectName" : name
    });
}