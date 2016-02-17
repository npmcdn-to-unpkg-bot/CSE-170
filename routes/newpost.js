var data = require("../data.json");

exports.addPost = function(req, res) {
    console.log("NEWpose.js");
    var newPost = {
        imageURL: req.query.imageURL,
        column: req.query.column,
        subTitle: req.query.subTitle,
        description: req.query.description
    };
    
    data["ideas"].push(newPost);
    res.render('profile', data);
}