
const coursesService = require("../services/courses.service.js");


module.exports = {
  async getAllCourses(req, res, next) {
    try {
      const courses = await coursesService.getAllCourses();
      res.send(courses);
    } catch (error) {
      res.send("error");
    }
  },
  async getOneCourse(req, res, next) {
    try {
      const course = await coursesService.getOneCourse();
      res.send(course);
    } catch (error) {
      res.send("error");
    }
  },
  async addCourse(req, res, next) {
    try {
      const course = await coursesService.addCourse(req.body);
      res.send(course);
    } catch (error) {
      res.send(error);
    }
  },
  async updateCourse(req, res, next) {
    try {
      const course = await coursesService.updateCourse(req.params.id);
      res.send(course);
    } catch (error) {
      res.send(error);
    }
  },
  async deleteCourse(req, res, next) {
    try {
      const course = await coursesService.deleteCourse(req.params.id);
      res.send(course);
    } catch (error) {
      res.send(error);
    }
  }
};
