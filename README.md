## Shochu is the Javascript utility library implementing Cocktails

## Installation

     npm i shochu

## Usage

#### -> browser

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- add this line -->
    <script src="https://cdn.jsdelivr.net/npm/shochu/dist/shochu.min.js"></script>
    <!-- add this line -->
  </head>

  <body>
    <script>
      const shochu = window.shochu;

      console.log(shochu.isString('Hello World')); // true
    </script>
  </body>
</html>
```

#### -> nodejs

```js
...
import shochu, { isNumber, isString } from 'shochu' // or with commonJS: const { flatten } = require('shochu')

console.log(shochu.stringFn.rmDicretics("ĥĕŀŀő ŵőrŀd")) // output: "hello world"
console.log(flatten([1, [2, [3, [4]]]])) // [1, 2, 3, 4]
console.log(isString('Hello World')); // true
```

## Methods

Update soon... ⏳
