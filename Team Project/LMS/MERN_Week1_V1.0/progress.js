const user = require("./user");
const emitter = require("./events");

async function markLesson(courseId, lesson) {
  try {
    const course = user.enrolledCourses.find(c => c.id == courseId);

    if (!course) {
      emitter.emit("operationFailed", "Not enrolled");
      throw "Not enrolled";
    }

    if (!course.lessons.includes(lesson)) {
      emitter.emit("operationFailed", "Invalid lesson");
      throw "Invalid lesson";
    }

    if (course.completed.includes(lesson)) {
      emitter.emit("operationFailed", "Already completed");
      throw "Already completed";
    }

    course.completed.push(lesson);
    emitter.on("lessonCompleted", lesson);

    return "Lesson completed!";
  } 
  catch (err) {
    throw err;
  }
}

function getProgress(course) {
  const total = course.lessons.length;
  const completed = course.completed.length;
  return ((completed / total) * 100).toFixed(2);
}

module.exports = { markLesson, getProgress };