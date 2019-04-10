const gulp = require("gulp");
const jsonminify = require("gulp-jsonminify");

// Minify JSON to save on file size.
gulp.task("build", () => {
  return gulp.src(["./src/**/*.json"])
    .pipe(jsonminify())
    .pipe(gulp.dest("dist"));
});
