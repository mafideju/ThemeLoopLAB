const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// COMPILAR E INJETAR NO NAVEGADOR
gulp.task('sass', function(){
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
	 .pipe(sass())
	 .pipe(gulp.dest("src/css"))
	 .pipe(browserSync.stream());
	});

//MOVER ARQUIVOS JS PARA A PASTA SRC (FONTE)
gulp.task('js', function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js',
		'node_modules/popper.js/dist/umd/popper.min.js'])
	  .pipe(gulp.dest("src/js"))
	  .pipe(browserSync.stream());
});

// WATCH SASS AND FOLDER
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./src"
	});
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

//MOVER PASTA DE FONTES PARA A PASTA ORIGEM
gulp.task('fonts', function(){
	return gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest("src/fonts"));
});

//MOVER FONT-AWESOME PARA A PASTA ORIGEM
gulp.task('fa', function(){
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
	.pipe(gulp.dest("src/css"));
});

gulp.task('default', ['js','serve','fonts','fa']);



//GULP.TASK - DEFINIR TASKS
//GULP.SRC - PEGA (APONTA) OS ARQUIVOS PARA USAR
//GULP.DEST - MOSTRA (APONTA) A PASTA DE SAIDA
//GULP.WATCH - WATCH FILES AND FOLDERS FOR CHANGES

// gulp.task('message', function(){
// 	return console.log('Gulp is Running...');
// });
// gulp.task('copyHtml', function(){
// 	gulp.src('src/*.html')
// 	.pipe(gulp.dest('dist'));
// });
