const router = require("express").Router();
const coursesController = require("../controllers/courses.controller.js");
const multer = require("multer");
const storage = multer.diskStorage({});
const DIR = "../front-end/src/assets/uploads/courses/";
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 100024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});

router.post("/",upload.array("file",2), coursesController.addCourse);
router.put("/", coursesController.updateCourse);
router.delete("/", coursesController.deleteCourse);
router.get("/", coursesController.getOneCourse);
router.get("/", coursesController.getAllCourses);

module.exports = router;
