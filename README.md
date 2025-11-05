<div align="center">
  <h1>DocunatorJS</h1>
  <p style="text-align:justify">A simplistic JavaScript library for generating documentation from code comments. Docunator JS helps developers create well-structured and easy-to-read documentation for their projects.
The resulting file is a JSON object that can be further processed or converted into various formats like HTML, Markdown, etc.</p>

</div>


<center><img src="logo.png" alt="drawing" width="300"/></center>

## Usage

Add the @docunator tag to your code comments to indicate that they should be included in the documentation.
Additionally, you can use different tags besides @docunator to provide more information about the documented item.
That way, you can generate several different documentations from within the same codebase.

```javascript
/**
 * @docunator
 * @title ZenPlay
 * @description A play button component overlayed on an image, with optional left text and right icon.
 * @author Danilo Ramírez Mattey
 * @version 1.0.0
 * @category Widget Components
 * @param {string} type - The theme type for the component (e.g., 'primary', 'secondary').
 * @param {ImageSource} imageSource - The source of the image to display.
 * @param {StyleSheet} style - Additional styles for the component container.
 * @param {Function} onPress - Function to execute when the play button is pressed.
 * @param {string} icon - The name of the icon to display on the play button.
 * @param {string} leftText - Optional text to display at the bottom left of the image.
 * @param {string }rightIcon - Optional icon name to display at the bottom right of the image.
 * @param {boolean} bordered - Whether to display a border around the component. Default is false.
 * @snack @daniloramirezcr/zenui-play-example
 * @example {tsx}

  import {
      Layout,
      Screen,
      ZenPlay,
  } from 'react-zen-ui';
  import { StyleSheet } from 'react-native';

  export default function PlayScreen() {
      const styles = StyleSheet.create({
        play: {
          width: 200,
          height: 200,
        },
      });

      const handlePlayPress = () => {
        console.log('Play button pressed!');
      };

      return (
        <>
          <Screen useTopSafeArea={false}>
            <Layout centerContent={true}>
              <ZenPlay
                style={styles.play}
                imageSource={{
                  uri: 'https://example.com/image.jpg',
                }}
                onPress={handlePlayPress}
                icon={'play'}
                leftText={'Sample Text'}
                rightIcon={'info'}
              />
            </Layout>
          </Screen>
        </>
      );
  }

 {/tsx}
 */

```

Then you can execute DocunatorJS (npx) to generate the documentation. You don't even have to install it globally!

```bash
npx danilor/docunatorjs -I ./src -O ./docs/documentation.json
```

For more options and available parameters, please use the --help flag:

```bash
npx danilor/docunatorjs --help

Usage: docunator-js [options]

Docunator JS is an automatic documentation generator for Typescript/JavaScript projects.

Options:
  -V, --version              output the version number
  -c, --config <string>      Path to custom configuration file (default: "./docunator.config.json")
  -O, --output <string>      The output path for the generated JSON file (default: "./docs.json")
  -I, --input <items>        The list of input path of the project to document (default: ["./src"])
  -A, --include <items>      Comma-separated list of file extensions to include (default: ["js","ts","tsx","jsx","mjs"])
  -D, --declarator <string>  The declarator tag for the comments to be read (default: "@docunator")
  -h, --help                 display help for command
```

Also, you can create a configuration file named `docunator.config.json` in your project root with the following structure:

```json
{
  "input": ["./src"],
  "output": "./docs/documentation.json",
  "include": ["js", "ts", "tsx", "jsx", "mjs"],
  "declarator": "@docunator"
}
```
The configuration file does not need to include all the parameters; only the ones you want to customize. 
The parameters on the CLI will override the ones in the configuration file.


## Available Tags

 - title [single]
 - description [single]
 - category [single]
 - type [single]
 - param [array]
   - {type} name description
 - link [array]
   - url
 - see [array]
 - author [single]
 - version [single]
 - since [single]
 - deprecated [single]
 - license [single]
 - return [array]
 - example (Requires starting and closing tags) [array]
   - {language} CODE {/language}
 - order [single]
 - group [single]
 - access [single]
 - copyright [single]
 - experimental [single]
 - snack [array] (The ID of the snack code. Refer to https://snack.expo.dev/)

