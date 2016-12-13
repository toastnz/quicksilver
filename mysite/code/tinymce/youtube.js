(function () {
    tinymce.create('tinymce.plugins.youtube', {

        init: function (ed, url) {
            var self = this;
            ed.addButton('youtube', {
                'title'  : 'Embedd youtube video',
                'onclick': function () {
                    function get_user_name($) {
                        var name;
                        name = prompt("Please insert a ID (e.g. PfBVIHgQbYk)");
                        return '<div class="embed-container"><iframe src="https://www.youtube.com/embed/' + name + '" frameborder="0" allowfullscreen></iframe></div>';
                    }

                    var name = get_user_name($);

                    ed.execCommand(
                        'mceInsertContent',
                        false,
                        name
                    );

                    // ed.windowManager.open({
                    //     title: 'Video URL',
                    //     body: [
                    //         {type: 'textbox', name: 'title', label: 'Video URL'}
                    //     ],
                    //     onsubmit: function(e) {
                    //         editor.insertContent('Title: ' + e.data.title);
                    //     }
                    // });

                }
            });

        },

        getInfo: function () {
            return {
                longname: 'youtube',
                author  : 'Jaydn de Graaf',
                infourl : 'http://pinc.nz',
                version : "1.0"
            };
        }
    });

    tinymce.PluginManager.add('youtube', tinymce.plugins.youtube);

})();
