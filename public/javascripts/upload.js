$(document).ready(function() {
	$('#preview').mCustomScrollbar({
		axis: "x",
		autoHideScrollbar: true,
		alwaysShowScrollbar: 1,
		theme: 'light-thin',
		scrollInertia: 300,
		advanced: {
			autoExpandHorizontalScroll: true
		}
	});

	var drop = new Dropzone('#upload', {
		autoProcessQueue: true,
		uploadMultiple: true,
		parallelUploads: 64,
		maxFiles: 64,
		previewsContainer: '#mCSB_1_container',
		previewTemplate: "<a class='dz-preview dz-file-preview' target='_blank'>" +
								"<div class='dz-details'>" +
									"<div class='dz-filename'><span data-dz-name></span></div>" +
									"<div class='dz-size' data-dz-size></div>" +
								"</div>" +
						"</a>",
		init: function() {
			this.on('successmultiple', function() {
				console.log('+Success');
			});
		}
	});

	$(document).on('DOMNodeInserted', '.dz-preview', function() {
		$(this).attr('href', '/upload/' + $(this).find('span').html());
	});
});
