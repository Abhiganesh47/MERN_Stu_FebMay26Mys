const readline = require("readline");
const chalk = require("chalk");

const courses = require("./courses");
const user = require("./user");
const emitter = require("./events");

const { enrollCourse } = require("./enroll");
const { markLesson, getProgress } = require("./progress");
const { withdrawCourse } = require("./withdraw");
const { validateName, retryLimit } = require("./validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempts = 0;

rl.question("Enter your name: ", (name) => {
  validateName(name, (err, validName) => {
    if (err) {
      console.log(chalk.red(err));
      rl.close();
    } else {
      user.name = validName;
      emitter.emit("sessionStarted", user.name);
      console.log(chalk.green(`Welcome ${user.name}`));
      menu();
    }
  });
});


function menu() {
  console.log(chalk.blue(`
LMS MENU 
1. View All Courses
2. View Course Details
3. Enroll in Course
4. View Enrolled Courses
5. Mark Lesson Complete
6. View Progress
7. Withdraw Course
8. Exit

`));

  rl.question("Choose option: ", async (choice) => {

    switch (choice) {

      case "1":
        emitter.emit("courseViewed");
        courses.forEach(c =>
          console.log(`${c.id}. ${c.title} (${c.instructor})`)
        );
        break;

      case "2":
        rl.question("Enter Course ID: ", (id) => {
          const course = courses.find(c => c.id == id);
          if (!course) {
            console.log(chalk.red("Invalid course"));
          } else {
            console.log(course);
          }
          menu();
        });
        return;

      case "3":
        rl.question("Enter Course ID: ", async (id) => {
          try {
            const msg = await enrollCourse(id);
            console.log(chalk.green(msg));
          } catch (err) {
            console.log(chalk.red(err));
          }
          menu();
        });
        return;

      case "4":
        console.log(chalk.yellow("Your Courses:"));
        user.enrolledCourses.forEach(c =>
          console.log(`${c.title} (${c.completed.length}/${c.lessons.length})`)
        );
        break;

      case "5":
        rl.question("Course ID: ", (id) => {
          rl.question("Lesson Name: ", async (lesson) => {
            try {
              const msg = await markLesson(id, lesson);
              console.log(chalk.green(msg));
            } catch (err) {
              console.log(chalk.red(err));
            }
            menu();
          });
        });
        return;

      case "6":
        emitter.emit("progressViewed");
        user.enrolledCourses.forEach(c => {
          console.log(
            `${c.title} → ${getProgress(c)}% completed`
          );
        });
        break;

      case "7":
        rl.question("Enter Course ID: ", (id) => {
          withdrawCourse(id);
          menu();
        });
        return;

      case "8":
        console.log(chalk.green("Thank you "));
        rl.close();
        return;

      default:
        attempts++;
        console.log(chalk.red("Invalid choice"));

        if (retryLimit(attempts, 3, rl)) return;
    }

    menu();
  });
}