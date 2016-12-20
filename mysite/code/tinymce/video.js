var insertVideo = {
    insert  : function (e) {
        var id            = document.getElementById('videoURL').value;
        var url           = this.parseURL(id);
        var embeddedVideo = '<div class="embed-container"><iframe src="' + url + '" frameborder="0" allowfullscreen></iframe></div>';

        tinyMCEPopup.editor.execCommand('mceInsertClipboardContent', false, {
            content    : embeddedVideo,
            wordContent: true
        });
        tinyMCEPopup.close();
    },
    parseURL: function (src) {
        if (src.match(/youtube\.com\/embed\/\w+/)) {
        } else {
            if (src.match(/youtu\.be\/[a-z1-9.-_]+/)) {
                src = 'http://www.youtube.com/embed/' + src.match(/youtu.be\/([a-z1-9.-_]+)/)[1];
            }
            if (src.match(/youtube\.com(.+)v=([^&]+)/)) {
                src = 'http://www.youtube.com/embed/' + src.match(/v=([^&]+)/)[1];
            }
        }
        if (src.match(/vimeo\.com\/([0-9]+)/)) {
            src = 'http://player.vimeo.com/video/' + src.match(/vimeo.com\/([0-9]+)/)[1];
        }
        return src;
    }
};
(function () {

    tinymce.create('tinymce.plugins.video', {
        init   : function (ed, url) {
            ed.addButton('video', {
                'title'  : 'Embedd video',
                'image'  : url + '/video.png',
                'onclick': function () {
                    ed.windowManager.open({
                        file    : window.location.origin + '/quicksilver/mysite/code/tinymce/video.html',
                        inline  : true,
                        onsubmit: function (e) {
                            console.log(e)
                        }
                    });
                }
            });
        },
        getInfo: function () {
            return {
                longname: 'video',
                author  : 'Jaydn de Graaf',
                infourl : 'http://pinc.nz',
                version : "1.1"
            };
        }
    });
    tinymce.PluginManager.add('video', tinymce.plugins.video);
})();