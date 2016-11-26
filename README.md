# SnoozeSquad
Finally a simple lazy image loader (for browsers, not Node.JS!). Written in ES6.

![npm version badge](https://badge.fury.io/js/snooze-squad.svg) [![npm](https://img.shields.io/npm/l/snooze-squad.svg)](https://github.com/sbrl/SnoozeSquad/blob/master/LICENSE)

## Downloading
Download SnoozeSquad from this repo. Links:

Makefile						| `curl` command
--------------------------------|-----------------------------
[SnoozeSquad.js](https://github.com/sbrl/SnoozeSquad/raw/master/SnoozeSquad.js)					| `curl -OL https://github.com/sbrl/SnoozeSquad/raw/master/SnoozeSquad.js`
[SnoozeSquad.min.js](https://github.com/sbrl/SnoozeSquad/raw/master/SnoozeSquad.min.js)				|  `curl -OL https://github.com/sbrl/SnoozeSquad/raw/master/SnoozeSquad.min.js`

### npm
Snooze Squad is on npm! You can find it under the name [`snooze-squad`](https://www.npmjs.com/package/snooze-squad), and install it with `npm install snooze-squad`.

## Usage
Using Snooze Squad is really easy. Here's a simple example:

```javascript
window.snoozeSquad = new SnoozeSquad({});
```

The first parameter in the above is the _options object_. You can specify a number of options that are listed below if you want to. Note that the options object is currently _required_, and SnoozeSquad won't work without it.

Once you've got that set up, change the name of the `src` attribute of all images that you want to be lazy loaded to `data-src`. The contents of `data-src` will be copied over to the `src` attribute when the image is woken up. Example:

```html
<!-- From this -->
<img src="/path/to/some/image.js" />

<!-- To this -->
<img data-src="/path/to/some/image.js" />
```

Note that no other attributes will be touched, so you can safely do whatever else you want to your images.

If for some reason the `data-src` attribute is unsuitable, you change change it with the `attributeName` parameter (see below).

Snooze Squad should also properly detect which images are currently in the viewport, and load them automatically.

You can also set the `src` attribute of your lazily-loaded images to a placeholder or other loading image / animation - Snooze Squad will overwrite this with the actual address of the image when the image is lazily loaded.

## Options
You can pass Snooze Squad a number of options. Below is an explanation of each:

 * `range` - The number of screens within the current screen an image is allowed to get before it is woken up.
 * `attributeName` - The name of the attribute that we should copy over to wake image up.
 * `updateInterval` - The maximum interval at which we should update. Helps to prevent lag.

## Development
Snooze Squad development isn't too complicated either. You'll need [Node.js] and make installed if you want to build / minify Snooze Squad.

Note that if you submit pull requests, it would be helpful if you _didn't_ minify the file yourself if there's alreayd a pull request waiting. That just gets messy.

### Setup
If you're on linux, just run `make setup` in the current directory. If not (or you're on a machine without `sudo` - how odd!), just run `npm install uglify-js-harmony --global` instead.

### Minification
Just run `make` in the current directory.

## License
Snooze Squad is licensed under the MIT license. See the [LICENSE](https://github.com/sbrl/SnoozeSquad/blob/master/LICENSE) file in this repository.
