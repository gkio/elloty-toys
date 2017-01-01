var YTD = require('./downloadYT')
var videoEdit = require('./videoEdit')

function editVideo(path){
	videoEdit.edit(path,function(){

	})
}



function downloadVideo(){
	
	YTD.download('https://www.youtube.com/watch?v=7uLShyREW3E',function(){
		editVideo('./downloadedVideo/video.mp4');
	})
}

downloadVideo()
