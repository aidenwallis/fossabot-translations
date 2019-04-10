const gulp = require("gulp");
const jsonminify = require("gulp-jsonminify");

// Minify JSON to save on file size.
gulp.task("minify", () => {
  return gulp.src(["./src/**/*.json"])
    .pipe(jsonminify())
    .pipe(gulp.dest("dist"));
});

gulp.task("copy-public", () => {
  return gulp.src(["./public/*"])
    .pipe(gulp.dest("dist"));
});


// Minify JSON, put into dist then copy over everything else.
gulp.task("build", gulp.series("minify", "copy-public"));
