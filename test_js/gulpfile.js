// include
const gulp = require('gulp');
const browserSync = require('browser-sync');

// option
var config = {
    filename: 'test',
    browserSync: true,
    browserSyncOption: {
        online: true,
        server: {
            baseDir: './',
            directory: true
        },
        open: 'external'
    }
};


gulp.task('default', ['watch']);

// watch
gulp.task('watch', getBrowserSync(false));
// watch : new browser
gulp.task('o', getBrowserSync('external'));

// browser-sync
function getBrowserSync(openType) {
    return function() {
        var type = openType;
        config.browserSyncOption.open = type;
        browserSync.init(config.browserSyncOption);
        gulp.watch('./js/' + config.filename + '.js').on('change', browserSync.reload);
    };
}
