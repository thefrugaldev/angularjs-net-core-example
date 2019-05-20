/// <binding AfterBuild='build-all' />
var gulp = require("gulp");

var root_path = {
    webroot: "./wwwroot/",
    app_src: "./src/",
    package_lib: root_path.webroot + "app"
};

gulp.task('clean', function () {
    return del([root_path.package_lib]);
});

gulp.task('copy-src', ['clean'], function () {
    gulp.src(root_path.app_src)
        .pipe(gulp.dest(root_path.package_lib));
});

gulp.task("copy-all", ["clean", "copy-src"]);