module.exports = new (class CoursesService {
  constructor() {
    this.course = require("../models/courses.model.js");
  }
  getAllCourses() {
    return this.course.find({});
  }
  getOneCourse(course) {
    return this.course.findOne(course);
  }
  addCourse() {
    return this.course.create();
  }
  updateCourse(id, course) {
    return this.course.findOneAndUpdate(id, course);
  }
  deleteCourse(id) {
    return this.course.findOneAndRemove(id);
  }
 
})();
