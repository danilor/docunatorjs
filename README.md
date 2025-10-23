# Docunator JS (Work in progress)

A simplistic JavaScript library for generating documentation from code comments. Docunator JS helps developers create well-structured and easy-to-read documentation for their projects.
The resulting file is a JSON object that can be further processed or converted into various formats like HTML, Markdown, etc.

## Usage

Add the @docunator tag to your code comments to indicate that they should be included in the documentation.

```javascript
/**
 * @docunator
 * @title ZenButton
 * @description A simple button component that can be used throughout the app. It supports different types (primary, secondary, success, info, warning, danger) and all of them are styled according to the current theme. The text color will be automatically selected based on the brightness of the button color, but it can be overwritten by passing a textColor prop.
 * @category Themed Components
 * @param {string} title The title of the button
 * @param {string} type - The type of the button. Can be 'primary', 'secondary', 'success', 'info', 'warning', or 'danger'. Default is 'primary'.
 * @param {string} textColor - The color of the button text. If not provided, it will be automatically selected based on the button color.
 * @param {boolean} fill - Whether the button should fill the width of its container. Default is true.
 * @param {number} touchableOpacity - The opacity of the button when pressed. Default is 0.7.
 * @param {function} pressAction - Alias for pressAction
 * @param {function} onPress - onPress action
 * @param {function} longPressAction - Alias for longPressAction
 * @param {function} onLongPress - onLongPress action
 * @param {string} leftIcon - The left icon of the button. Should be a valid icon name from the ZenIcon component.
 * @param {string} rightIcon - The right icon of the button. Should be a valid icon name from the ZenIcon component.
 * @param {Element} leftAccessory - A left accessory. Accepts any valid React Node.
 * @param {Element} rightAccessory - A right accessory. Accepts any valid React Node.
 * @param {boolean} disabled - Whether the button is disabled. Default is false.
 * @param {StyleSheet} style - Additional styles for the button container.
 *
 * @link https://github.com/danilor/zen-ui
 * @link https://github.com/danilor/zen-ui/blob/main/example/src/components/examples/ButtonExample.tsx
 *
 */
```

Then you can execute Docunator JS to generate the documentation.

```bash
npx danilor/docunatorjs -I ./src -O ./docs/documentation.json
```

For more options and available paramters, please use the --help flag:

```bash
npx danilor/docunatorjs--help
```

## Available Tags

 - title
 - description
 - category
 - param
   - {type} name description
 - link
   - url
 - see
 - author
 - version
 - since
 - deprecated
 - license
 - return

