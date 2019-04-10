const gulp = require("gulp");
const jsonminify = require("gulp-jsonminify");

// Minify JSON to save on file size.
gulp.task("build", () => {
  return gulp.src(["./src/**/*.json", "./public/*"])
    .pipe(jsonminify())
    .pipe(gulp.dest("dist"));
});
