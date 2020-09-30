# wmlang.js

Translate weekdays and months with "Intl", which is included by your browser.


## Demo

http://tools.bitfertig.de/wmlang.js/


## Install

```bash
npm i @dipser/wmlang.js
```


## Usage

```html
<script type="module">
import { month, weekday } from '@dipser/wmlang.js';
console.log( weekday(1, 'de') ); // => Montag
console.log( month(1, 'de') ); // => Januar
</script>
```


## How it works

```javascript
function month(month, locale = 'en') {
    let intl = new Intl.DateTimeFormat(locale, { month: 'long' });
    return intl.format( new Date(1970, Number(month) - 1, 1) );
}
month(2, 'de'); // => Februar
```


## More
* [npm package](https://www.npmjs.com/package/@dipser/wmlang.js)
* [twitter](https://twitter.com/dipser)