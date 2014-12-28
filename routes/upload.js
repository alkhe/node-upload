var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
	res.render('upload', {
		title: 'Express'
	});
})
.post('/', function(req, res) {
	var image,
		files = req.files;
	console.log(files);
	for (var file in files) {
		image = files[file];
		console.log('+Upload ' + image.originalname);
		fs.rename(image.path, image.path.replace(image.name, image.originalname), function() {

		});
	}
	res.json({
		success: 'OK'
	});
})
.get('/upload', function(req, res) {
	fs.readdir('public/upload', function(err, files) {
		if (err)
			return console.log(err);
		for (var i = 0; i < files.length; i++)
			files[i] = '<a href="' + files[i] + '">' + files[i] + '</a>';
		res.end(files.join('<br />'));
	});
});
/*
.get('/:resource', function(req, res) {
		console.log(req.param('resource'));
	fs.readFile('public/upload/' + req.param('resource'), function(err, data) {
		if (err)
			return res.json({
				errorCode: 404,
				error: 'File not found'
			});
		res.end(data);
	});
});
*/

module.exports = router;
