var path = require('path');
var fs   = require('fs');
var ytdl = require('youtube-dl');

module.exports = {

download: function(urlV,cb){
		var video = ytdl(urlV, ['-f', '22']);

		var size = 0;
		var pathForDownload = '';
		video.on('info', function(info) {
		  'use strict';
		  size = info.size;
		  pathForDownload = '/downloadedVideo/' + 'video.mp4';
		  var file = path.join(__dirname, pathForDownload);
		  video.pipe(fs.createWriteStream(file));

		});

		var pos = 0;
		video.on('data', function data(chunk) {
		  'use strict';
		  pos += chunk.length;

		  // `size` should not be 0 here.
		  if (size) {
		    var percent = (pos / size * 100).toFixed(2);
		    process.stdout.cursorTo(0);
		    process.stdout.clearLine(1);
		    process.stdout.write(percent + '%');
		  }
		});

		video.on('end', function end() {
		  'use strict';
		  cb()
		});
	}
};