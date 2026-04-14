const courses = require("./courses");
const user = require("./user");
const emitter = require("./events");

function enrollCourse(courseId) {
  return new Promise((resolve, reject) => {
    emitter.emit("enrollmentStarted");

    const course = courses.find(c => c.id == courseId);

    if (!course) {
      emitter.emit("operationFailed", "Course not found");
      return reject("Course not found");
    }

    const already = user.enrolledCourses.find(c => c.id == courseId);
    if (already) {
      emitter.emit("operationFailed", "Already enrolled");
      return reject("Already enrolled");
    }

    user.enrolledCourses.push({
      ...course,
      completed: []
    });

    emitter.emit("enrollmentConfirmed", course.title);
    resolve("Enrollment successful");
  });
}

module.exports = { enrollCourse };