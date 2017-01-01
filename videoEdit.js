var ffmpeg = require('ffmpeg')

module.exports = {
	edit: function(path,cb){
		try {
			var process = new ffmpeg(path);
			process.then(function (video) {
				// Callback mode
				console.log(video)
			}, function (err) {
				console.log('Error: ' + err);
			});
		} catch (e) {
			console.log(e.code);
			console.log(e.msg);
		}
	}
}
