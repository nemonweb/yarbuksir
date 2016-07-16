const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const responsive = require('gulp-responsive');

gulp.task('default', function () {
  return gulp.src('images_src/baners/*.{png,jpg}')
    .pipe(responsive({
      '*': [
        {
          width: '50%',
          rename: { suffix: '@1x' },
        },
        {
          width: '100%',
          rename: { suffix: '@2x' },
        }
      ]
    },
    {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }
  ))
    .pipe(gulp.dest('images/baners'));
});
