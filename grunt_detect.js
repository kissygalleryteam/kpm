/**
 * @fileoverview gruntjs 目录检测模块（coding）
 * @author: 伯方<sirzxj@126.com>
 */
var fs = require('fs');


/*global module:false*/
module.exports = function(grunt) {


	var Direction = {
		//需要检测的文件列表
		list: ['./tmp', './demo.html', './index.js', '../index.html', '../README.md'],
		existFiles: function() {
			var isOk = true;
			this.list.forEach(function(value) {
				var hasFile = fs.existsSync(value);
				if (hasFile) {
					grunt.log.ok('Has File : ' + value);
				} else {
					isOk = false;
					grunt.log.error('No File : ' + value);
				}
			});
			return isOk;
		}
	};

	//目录检测模块
	grunt.registerTask('detect', 'KISSY-gallery', function() {
		var isOk = Direction.existFiles();
		if (isOk) {
			grunt.log.writeln().success("Files are ok");
			return true;
		} else {
			grunt.log.writeln().fail('Please Check Files');
			return false;
		}

	});
	grunt.registerTask('default', ['detect']);
};