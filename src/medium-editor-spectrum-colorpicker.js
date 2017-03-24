/*
 * Based on the comment of @Jacotheron on: https://github.com/yabwe/medium-editor/issues/523#issuecomment-94843261
 *
 * Copyright (c) 2017 Bruno Peres
 * Licensed under the MIT license.
 */
 (function (window, document) {
  'use strict';
  function colorPickerDerived() {
    this.parent = true;
    this.options = {
      name: 'colorPicker',
      action: 'applyForeColor',
      aria: 'color picker',
      tagnames: ['p', 'h3', 'h4'],
      contentDefault: '<input type="text" class="MediumEditorColorPicker" />'
    };
    this.name = 'colorPicker';
  }

  colorPickerDerived.prototype = {
    handleClick: function (evt) {
      evt.stopPropagation();
      evt.preventDefault();

      var self = this.base;

      self.saveSelection();

      // If no text selected, stop here.
      if( self.selectionState.end - self.selectionState.start === 0 ) {
        return;
      }

      var colorpicker = document.getElementsByClassName('MediumEditorColorPicker');
      var this_color = document.queryCommandValue('foreColor');
      colorpicker.spectrum('set', this_color);

      // handle the change event
      colorpicker.on('change.spectrum', function (e, color) {
        self.restoreSelection(); // make sure we still have a selection
        var new_color = color.toHexString();
        self.options.ownerDocument.execCommand('styleWithCSS', false, true);//we want css color
        self.options.ownerDocument.execCommand('foreColor', false, new_color);
      });
      colorpicker.spectrum('toggle'); // open spectrum

      return false;
    }
  };
  colorPickerExtension = MediumEditor.util.derives(MediumEditor.statics.DefaultButton, colorPickerDerived);
 }(window, document));
