const gulp = require('gulp')
const concat = require('gulp-concat') // serve para concatenar varios arquivos
//const uglify = require('gulp-uglify') // compactar os arquivos tirando os espaços em brancos para deixar mais compacto possível
const babel = require('gulp-babel')


gulp.task('default', () => {
    return gulp.src('src/**/*.js') //babel converte códigos.. typeScript para JS puro (transpile)
        .pipe(babel({
            minified: true,
            comments: false,
            presets: ["env"]
        }))
        //.pipe(uglify()) //uglify -> tornar codigo mais compácto possíveln tirando espaços e linhas
        .on('erro', function (err){ console.log(err) }) //caso der erro mostrar erro
        .pipe(concat('codigo.min.js')) // concatenar vários arquivos...
        .pipe(gulp.dest('build'))
})