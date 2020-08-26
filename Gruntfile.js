module.exports = function(grunt) {
  grunt.initConfig({
    fixtures: {
      import_test_data: {
        src: [
          './src/seeders/fixture_users.js',
          './src/seeders/fixture_posts.js',
        ],
        models: function () {
          return require('./src/models')
        },
        options: {
          encoding: 'utf-8'
        }
      }
    }
  });
  grunt.loadNpmTasks('sequelize-fixtures');
  grunt.registerTask('default', ['fixtures']);
}
