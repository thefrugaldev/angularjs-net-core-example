/// <binding BeforeBuild='copy-src' />
var gulp = require('gulp');
var del = require('del');

var root_path = {
    webroot: './wwwroot/',
    app_src: './src/',
};

gulp.task('clean', function () {
    return del([root_path.webroot] + '!(lib)/**/*');
});

gulp.task('copy-src', gulp.series('clean', function () {
    return gulp.src(root_path.app_src + '**/*')
        .pipe(gulp.dest(root_path.webroot));
}));