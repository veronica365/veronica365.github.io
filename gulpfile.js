const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");

// Concat and minify CSS files
gulp.task("build-css", () => {
  return (
    gulp
      .src("build/responsive.min.css")
      // .src("src/css/*.css")
      .pipe(concat("responsive.min.css"))
      .pipe(cleanCss())
      .pipe(gulp.dest("assets/css"))
  );
});

gulp.task("session-start", (cb) => {
  return gulp.series("build-css")(cb);
});

gulp.task("default", gulp.series("session-start"));
