# Medium Editor Spectrum Colorpicker

> Integrates Spectrum colorpicker into Medium Editor


## Getting Started

Install via bower:

`bower install medium-editor-spectrum-colorpicker`

Then make sure you pass this parameteres when initiating Medium Editor:

```javascript
new MediumEditor(moduleInstances, {
    buttons: [
        'colorPicker'
    ],
    extensions: {
      'colorPicker': new colorPickerExtension()
    }
  });
```


## License

MIT © Bruno Peres
