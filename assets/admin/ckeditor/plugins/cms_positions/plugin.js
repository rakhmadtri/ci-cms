CKEDITOR.plugins.add('cms_positions',
{
    lang: 'sk,en,cs',
    requires : ['richcombo'],
    init : function( editor )
    {
        var config = editor.config;
        var lang = editor.lang.cms_positions;

        editor.ui.addRichCombo('cms_positions',
        {
            label : lang.singluar,
            title :lang.singluar,
            voiceLabel : lang.singluar,
            multiSelect : false,

            panel :
            {
                css : [ config.contentsCss, CKEDITOR.skin.path() + 'editor.css' ],
                voiceLabel : lang.panelVoiceLabel
            },

            init : function()
            {
                this.startGroup(lang.plurar);
                for (var this_tag in cms.positions){
                    this.add('<div>' + cms.positions[this_tag][0] + '</div>', cms.positions[this_tag][1], cms.positions[this_tag][1]);
                }
            },

            onClick : function(value)
            {         
                editor.focus();
                editor.fire('saveSnapshot');
                editor.insertHtml(value);
                editor.fire('saveSnapshot');
            }
        });
    }
});