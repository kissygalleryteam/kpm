var fs = require('fs');
var path = require("path");


/*global module:false*/
module.exports = function(grunt) {

	//新增文件夹列表
	var folderList = [
		'{modName}',
		'{modName}/{version}',
		'{modName}/{version}/demo',
		'{modName}/{version}/doc',
		'{modName}/{version}/guide'];

	//新增文件列表
	var fileList = [
		'{modName}/package.json',
		'{modName}/{version}/index.js',
		'{modName}/README.MD',
		'{modName}/{version}/guide/index.md',
		'{modName}/{version}/demo/index.html'];

	// build.json文件里的信息
	var BUILD_JSON = '{\n' +
		'	"tag":"{modName}",\n' +
		'	"dec":"",\n' +
		'	"author":"",\n' +
		'	"cover":"",\n' +
		'	"version":"{version}",\n' +
		'	"build":"index.js"\n' +
		'}';

	//	初始化的index.js里面内容		
	var INDEX_JS = '/**\n' +
		' * @fileOverview \n' +
		' * @author  \n' +
		' */\n' +
		'KISSY.add(function (S) {\n' +
		'   // your code here\n' +
		'   \n' +
		'}, {\n' +
		'    requires: []\n' +
		'});';


	var Add = {
		init: function(modName, version) {
			this.config = {
				modName: modName,
				version: version
			};
			this._doAdd();
		},

		/**
		 * 新建文件夹
		 * @param {String} folderName 文件夹名字
		 */
		addFolder: function(folderName) {
			if (!fs.existsSync(folderName)) {
				fs.mkdirSync(folderName);
				grunt.log.writeln('Created folder :       ' + folderName);
			}
		},
		/**
		 * 新建文件
		 * @param {String} fileName 文件名
		 * @param {String} content  文件内容
		 */
		addFile: function(fileName, content) {
			if (fs.existsSync(fileName)) {
				return;
			}
			grunt.file.write(fileName, content);
			grunt.log.writeln('Created file :       ' + fileName);
		},
		/**
		 * 类似于KISSY.substitute
		 */
		_sub: function(str, obj) {
			return str.replace(/{(.*?)}/igm,

			function($, $1) {
				return obj[$1] ? obj[$1] : $;
			});
		},
		/**
		 * 执行新建文件夹和文件的操作
		 */
		_doAdd: function() {
			var self = this;
			var config = this.config;
			//遍历文件夹
			folderList.forEach(function(value) {
				self.addFolder(self._sub(value, config));
			});
			// build.json 单独做
			self.addFile(self._sub(fileList[0], config), self._sub(BUILD_JSON, config));
			// index.js 单独做
			self.addFile(self._sub(fileList[1], config), INDEX_JS);
			// 其余的文件只新增，不进行操作
			for (var i = 2, len = fileList.length; i < len; i++) {
				self.addFile(self._sub(fileList[i], config));
			}
		}
	};

	//目录检测模块 输入命令：grunt kpminit:offline:1.0(版本号可以不输入就默认1.0)
	grunt.registerTask('kpminit', 'KISSY-gallery', function() {
		var modName = arguments[0],
			//版本号默认是1.0
			version = arguments[1] || '1.0';
		//模块名必须输入
		if (typeof modName === 'undefined') {
			grunt.log.writeln().fail('Please input mod name like  kpminit:offline');
			return;
		}
		// grunt.log.writeln('Remind: You should prefect package.json file before publish your code');
		Add.init(modName, version);
	});

	grunt.registerTask('default', ['kpminit']);
};