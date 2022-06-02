const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const fs = require("fs");
// let User = require('../models/user.modal');
let Project = require('../Modals/projectmdel.js');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'Images/Projects');
    },
    filename: function(req, file, cb) {   
        cb(null,`${uuidv4()}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


router.route('/add').post(upload.single('image'), (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    const proStartingDate = req.body.proStartingDate;
    const proEndingDate = req.body.proEndingDate;
    var image = `${process.env.SERVER_URL}/${req.file.filename}`;

    const newProjectData = {
        title,
        description,
        proStartingDate,
        proEndingDate,
        image
    }

    const newProject = new Project(newProjectData);

    newProject.save()
           .then(() => res.json('Project Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getData').get( async(req,res) => {
       try{
        const project = await Project.find();
        return res.json({data : project})
       }catch(error){
           console.log(error)
           res.json({ status: 'error', error: 'Data not found' })
       }
} )

router.route('/getImage').get( (req,res) => {

        try{
            fs.readFile(`./Images/Projects/${req.body.id}`,function (err, image) {
                if (err) {
                    console.log(err)
                }
                console.log(image);
                res.send();
            });
        }catch(error)
        {
            console.log(error)
           res.send("Data not found");
        }

    

})

module.exports = router;