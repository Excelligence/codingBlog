const gulp = require('gulp');
const browserSync = require('browser-sync').create();



gulp.task('browser-sync', function() {
    browserSync.init({
      
        proxy: "localhost:4000"
        
    });
    gulp.watch(['_site/*.*','_drafts/*.*','assets/*.*']).on('change',browserSync.reload)
});

