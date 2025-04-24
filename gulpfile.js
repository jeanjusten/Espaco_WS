import gulp from "gulp";
import cssnano from "gulp-clean-css"; 
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";
import webp from "gulp-webp";

// CSS
function css() {
  return gulp.src("build/styles/style.css")
    .pipe(cssnano())
    .pipe(gulp.dest("build/dist/styles"));
}

// JavaScript
function js() {
  return gulp.src("src/scripts/*.js") 
    .pipe(uglify())
    .pipe(gulp.dest("build/dist/scripts"));
}

// Compress to WEBP
function webpImages() {
  return gulp.src("src/img/*") 
    .pipe(imagemin()) 
    .pipe(webp()) 
    .pipe(gulp.dest("build/dist/img")); 
}

export { 
  css, 
  js, 
  webpImages
};

export default gulp.series(
  css,
  js,
  webpImages,
);
