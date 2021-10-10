const YoutubeMusicApi = require('../index.js')

const api = new YoutubeMusicApi()
api.initalize() // Retrieves Innertube Config
	.then(info => {
		api.getAlbum("MPREb_REsMMqBZjZB").then(result => {
	 		console.log(result)
		}) // just search for songs
	})

// * keeps the scripts alive
setInterval(function () {
	console.log("timer that keeps nodejs processing running");
}, 1000 * 60 * 60);
