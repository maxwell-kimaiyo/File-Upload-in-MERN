
import express from 'express';
import fileData from '../model/dataModel';
import multer  from 'multer';
const router = express.Router();


 const storage = multer.diskStorage({
  destination:"./uploads/",
  filename: function(req, file, cb){
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '-' + fileName)
  }
});
const uploadpdf = multer({
  storage: storage,
  limits:{fileSize: 100000}  
}).single("file");

const upload = multer({
  storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
                 return cb(new Error('Only .png, .jpg .pdf and .jpeg  format allowed!'));
        }
    }
}).single("file");

router.post('/uploadimg/',upload,async (req, res) => {
  if(req.files ===  null) {
    return res.status(400).send({message: 'No file was uploaded'});
  }
  const url = req.protocol + '://' + req.get('host')

   const file =await PageData.findById({_id: req.params.id });
   if (file) {
    file.image =url + '/uploads/' + req.file.filename;
    const updatedFile = await file.save();
    if (updatedFile) {
      return res.status(200).send({ message: 'image Updated succesfully', file: updatedFile });
    }
  }
  return res.status(500).send({ message: ' Error in Updating image.' });
   

})
router.post('/uploadpdf/',  upload,async (req, res) => {
  if(req.files ===  null) {
    return res.status(400).send({message: 'No file was uploaded'});
  }
  const url = req.protocol + '://' + req.get('host')

   const file =await PageData.findById({_id: req.params.id });
   if (file) {
    file.pdf =url + '/uploads/' + req.file.filename;
    const updatedFile = await file.save();
    if (updatedFile) {
      return res.status(200).send({ message: 'image Updated succesfully', file: updatedFile });
    }
  }
  return res.status(500).send({ message: ' Error in Updating image.' });
   
   
 

})
    export default router;
