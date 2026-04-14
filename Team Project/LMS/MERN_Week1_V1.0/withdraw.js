const user = require("./user");
const emitter = require("./events");

function withdrawCourse(courseId) {
  const course = user.enrolledCourses.find(c => c.id == courseId);

  if (!course) {
    emitter.emit("operationFailed", "Course not found in enrolled list");
    return;
  }

  user.enrolledCourses = user.enrolledCourses.filter(
    c => c.id != courseId
  );

  emitter.emit("courseWithdrawn", course.title);
}

module.exports = { withdrawCourse };