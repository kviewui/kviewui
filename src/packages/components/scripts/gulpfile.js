var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

const sourceDir = '../common/css/dist';

gulp.task('less', (cb) => {
    gulp.src('../common/css/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        }))
        .pipe(gulp.dest(sourceDir));

    console.log('less编译完成');
    
    cb();
});