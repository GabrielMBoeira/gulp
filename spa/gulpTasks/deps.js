const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['app.css', 'app.fonts'])

gulp.task('app.css', () => {
    return gulp.src(['node_modules/font-awesome/css/font-awesome.css'])
        .pipe(uglifycss({"uglyComments": true})) // minificando tudo em 1 linha
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))    
})

gulp.task('app.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})