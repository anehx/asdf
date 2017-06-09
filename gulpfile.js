var gulp        = require('gulp')
var less        = require('gulp-less')
var browserSync = require('browser-sync').create()

// Compile LESS files from /less into /css
gulp.task('less', function() {
  return gulp.src('less/creative.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('default', ['less'])

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less'], function() {
  gulp.watch('less/*.less', ['less'])
  gulp.watch('*.html', browserSync.reload)
  gulp.watch('js/**/*.js', browserSync.reload)
})
