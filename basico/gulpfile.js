const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    return gulp.src(['pastaA/**/*.txt']) //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        //.pipe(transformacao1())
        //.pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('antes1 !!!')
})

gulp.task('antes2', () => {
    console.log('antes2 !!!')
})

gulp.task('fim', () => {
    console.log('fim !!!')
})



gulp.task('fim', ['fim1 , fim2']) //Esta task não chama função

gulp.task('fim1', () => {
    console.log('fim 1!!!')
})

gulp.task('fim2', () => {
    console.log('fim 2!!!')
})


