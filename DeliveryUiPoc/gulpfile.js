/// <binding AfterBuild='build-all' />

var gulp = require("gulp");

var root_path = {
    webroot: "./wwwroot/"
};

//library source
root_path.nmSrc = "./bower_components/";

//library destination
root_path.package_lib = root_path.webroot + "lib/";


gulp.task('copy-lib-css', function () {
    gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(root_path.webroot + '/css/'));
});

gulp.task('copy-lib-js', function () {
    gulp.src('./bower_components/angular/angular.min.js')
        .pipe(gulp.dest(root_path.package_lib + 'angular/'));
    gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.min.js')
        .pipe(gulp.dest(root_path.package_lib + 'angular/'));
});

gulp.task("copy-all", ["copy-lib-css", "copy-lib-js"]);
//Copy End