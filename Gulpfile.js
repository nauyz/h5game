var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

var sass = require('gulp-sass');

var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var source = require('vinyl-source-stream');
var reactify = require('reactify');


var paths = {
  sass: ['./www/scss/*.scss'],
  js: ['./www/js/*.js', './www/js/**/*.jsx', './www/js/**/*.js'],
  dest: ['./www/dest/*.js']
};

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({
        errLogToConsole: true,
        sourceComments : 'normal'
    }))
    .pipe(gulp.dest('./www/css/'))
    //.pipe(livereload());
});


gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.js, ['browserify']);
    //gulp.watch(paths.dest, ['scripts']);
});

gulp.task('browserify', function() {
    var b = browserify();
    b.transform(reactify); // use the reactify transform
    b.add('./www/js/app.js');

    return b.bundle()
        .on('error', function(err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./www/dest/'))
        .pipe(livereload());
});

gulp.task('scripts', function() {
    return gulp.src(paths.dest)
        .pipe(uglify())
        .pipe(rename(function (path) {
            if(path.extname === '.js') {
                path.basename += '.min';
            }
        }))
        .pipe(gulp.dest('./www/dest/min/'));
});

gulp.task('develop', ['sass', 'scripts'], function() {
    livereload.listen();
    nodemon({
        script: 'server.js',
        ext: 'css js handlebars',
        ignore: ['node_modules/*']
    }).on('restart', function() {
        setTimeout(function() {
            livereload.changed(__dirname);
        }, 2000);
    });
});

gulp.task('build', [
    'sass',
    'scripts'
]);

gulp.task('default', [
    'sass',
    'browserify',
    'scripts',
    'develop',
    'watch'
]);