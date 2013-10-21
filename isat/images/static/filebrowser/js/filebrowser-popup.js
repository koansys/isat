/* Loading this file dynamically creates a popup dialog showing the
 * media library for file selection (single file selection only at
 * this time) inside an iframe.
 *
 * To invoke the popup, call the mediaLibrary.open function with the
 * following arguments:
 *
 *  1. Callback function: The function that will be called after the
 * popup is closed. The function will be called with a single
 * argument, which will be:
 *
 *     + null: if no selection was made (e.g. dialog closed by hitting
 * ESC), or
 *
 *     + the path of the selected file
 *
 *  2. Type of files that are selectable. Optional, defaults to image.
 *
 * The page that loads this script needs to load the following
 * resources:
 *
 *  1. css: filebrowser/css/smoothness/jquery-ui-1.9.1.custom.min.css
 *  2. js:  mezzanine/js/%s' % settings.JQUERY_FILENAME
 *  3. js:  filebrowser/js/jquery-ui-1.9.1.custom.min.js
 *  4. js:  filebrowser/js/filebrowser-popup.js (this script)
 *
 * Please keep in mind that jQuery UI dialog imposes z-index which isn't
 * always correctly calculated so it might need to be manually overridden
 * in the CSS. This happens with Mezzanine's inline editing for instance,
 * where exposeMask has bigger z-index than the dialog.
**/

var mediaLibrary = {
	iframe: null,
	gallery: null,

	init: function() {
		this.iframe = $('<iframe frameborder="0" marginwidth="0" marginheight="0" width="900" height="500" allowfullscreen></iframe>');
		this.gallery = $('<div></div>').append(this.iframe).appendTo('body')
			.dialog({
				autoOpen: false,
				title: 'Media Library',
				width: 900,
				dialogClass: 'media-library',
				resizable: false,
				create: function(event, ui) {
					$(this).css('padding', 0);
				}
			});
	},

	open: function(callback, type) {
		var url = null,
			iframe = mediaLibrary.iframe,
			gallery = mediaLibrary.gallery;

		// type defaults to image
		type = (typeof type !== 'undefined') ? type : 'image';
		iframe.attr('src', window.__filebrowser_url + '?pop=4&type=' + type);

		gallery.dialog('open');

		gallery.on('dialogclose', function() {
			// Make sure to unload the iframe
			iframe.attr('src', '');
			// Certain editors (e.g. pagedown) require this callback to be
			// asynchronous.
			setTimeout(function() {
				callback(url);
			}, 1);

			// Clean-up the events so they don't get triggered more than once
			iframe.off('load');
			gallery.off('dialogclose');
		});

		// Binding must wait until iframe's content is completely loaded.
		iframe.on('load', function() {
			// This will work as long as both parent window and
			// iframe src are on the same domain.
			$(iframe.get(0).contentWindow.document)
				.find('.fb_selectlink')
				.click(function(e) {
					e.preventDefault();
					url = $(this).attr('rel');
					gallery.dialog('close');
			});
		});

		return true; // tell the editor that we'll take care of getting the image url
	}
};

// Compatibility for libraries that depend on old non-namespaced function
var browseMediaLibrary = mediaLibrary.open;

$(function() {
	mediaLibrary.init();
});
