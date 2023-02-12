var gulp = require('gulp'),
    less = require('gulp-less'), // less编译插件
    autoprefixer = require('gulp-autoprefixer'); // 自动处理浏览器前缀插件

const sourceDir = '../styles/';

const chalk = require('chalk');

gulp.task('less', (cb) => {
    gulp.src('../src/weex-animation/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'ie > 11', 'iOS >= 10', 'Android >= 5']
        }))
        .pipe(gulp.dest(sourceDir));

    console.log(chalk.green('less编译完成'));
    
    cb();
});