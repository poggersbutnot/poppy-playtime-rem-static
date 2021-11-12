<img src="https://m.media-amazon.com/images/M/MV5BMzY3ZGU1MTgtM2YzMS00OTRkLTg3NWQtOWNmNTUxN2M3NzI3XkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_FMjpg_UX1000_.jpg" width="64" align="left" />

## Rem-Stat
Removes the static and can increase the brightness in https://poppyplaytimeco.com/. [![Link](https://cdn.discordapp.com/emojis/908678193886658570.png?size=28)](https://poppyplaytimeco.com/)

**Features**
- Makes it easier to spot things.
- Up Brightness Option.
- Remove Static


# FAQ:
> Why?
- Just a fun tool for theorists.

> Can i view the code?
- Yes! It's open source.

> How do i run?
-If you don't have tamper monkey [Link](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)]. Open console (Windows: ctrl + shift + j, Mac: cmd + option + j) and paste (Windows: ctrl + v, Mac: cmd + v) this:

```js
fetch("https://raw.githubusercontent.com/poggersbutnot/poppy-playtime-rem-static/main/scripts/console-script.js").then((res) => res.text().then((t) => eval(t)))
```

> What if i have Tamper Monkey?
- Then Create a new script in tamper monkey, and paste this in:

```js
// ==UserScript==
// @name         Theory Helper
// @version      2.7
// @description  Unstatic Images, and Bright the images in the poppy playtime site.
// @author       poggersbutnot
// @match        *://poppyplaytimeco.com/*
// @icon         https://poppyplaytimeco.com/assets/icon.jpg
// @grant        none
// ==/UserScript==

"use strict";
fetch("https://raw.githubusercontent.com/poggersbutnot/poppy-playtime-rem-static/main/scripts/Tamper-Monkey.js").then((res) => res.text().then((t) => eval(t)))
```

