<p class="left"><input class="input field_placeholder fv" name="<?= $name ?>" id="<?= $field_id ?>" value="<?= $value ?>" data-page="field_placeholder" data-placeholder="<?= ll('admin_general_imagepicker_placeholder') ?>" /></p>
<p class="left"><a href="javascript:page.elfinder_pick('<?= $name ?>', 'image', <?= $multiple ? 'true' : 'false' ?>)" class="jui_icon ui-state-default ui-corner-all tiptip" data-page="tiptip" data-tip="top" title="<?= ll('admin_general_browse_image') ?>"><span class="ui-icon ui-icon-folder-open"></span></a></p>
<p class="left link_to_target"><a href="#" class="jui_icon ui-state-default ui-corner-all fancybox tiptip" data-page="fancybox tiptip" data-tip="right" title="<?= ll('admin_general_show_thumbnail') ?>"><span class="ui-icon ui-icon-carat-1-e"></span></a></p>