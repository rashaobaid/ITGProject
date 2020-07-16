
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourcemap: false,
          compress: true,
          yuicompress: true,
          style: 'expanded',
        },
        files: {
          'assets/css/style.css' : 'assets/scss/style.scss',
          'assets/css/section.css' : 'assets/scss/section.scss',
          'assets/css/slider.css' : 'assets/scss/slider.scss',
          'assets/css/Categories.css' : 'assets/scss/Categories.scss',
          'assets/css/footer.css' : 'assets/scss/footer.scss',

        }
      },
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['sass', 'watch']);
}