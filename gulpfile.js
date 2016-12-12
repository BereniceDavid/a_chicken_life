var gulp = require('gulp'),
		gulp_cssnano = require('gulp-cssnano'),
		gulp_rename = require('gulp-rename'),
		gulp_concat = require('gulp-concat'),
		gulp_uglify = require('gulp-uglify');

//on minimifie le fichier css 
gulp.task('css', function() {
//	console.log("css");
	return gulp.src('./src/css/style.css')
		.pipe( gulp_cssnano() )
		.pipe( gulp_rename('style.min.css') )
		.pipe( gulp.dest('./src/css/') );
});

//on concatenne et minifie les différents fichiers js
gulp.task('js', function() {
//	console.log('js');
	return gulp.src( [ 
		'./src/js/fastclick.js',
		'./src/js/script.js',
	])
	.pipe( gulp_concat ('script.min.js') )
	.pipe( gulp_uglify() )
	.pipe( gulp.dest( './src/js/') );
});

//on watch les changements de css et de js pour mettre à jour les fichiers minifiés au chargement
gulp.task( 'watch', function(){
	gulp.watch('./src/css/style.css', ['css']);
	gulp.watch([
		'./src/js/**',	
		'!./src/js/script.min.js',
	], ['js']);
});

//lancer pour la première fois toutes les taches gulp
gulp.task( 'default', ['css', 'js', 'watch']);