const gulp = require('gulp');
const browserSync = require('browser-sync').create();

try{
    gulp.task('browser-sync', function() {
        browserSync.init({
          
            proxy: "localhost:4000"
            
        });
        gulp.watch(['_site/*.*','_drafts/*.*','assets/*.*']).on('change',browserSync.reload)
    });
    
 

  






gulp.task('default', gulp.parallel('browser-sync'));
}

catch(err){
    console.log(err)
}
