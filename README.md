# SnoozeSquad
Finally a simple lazy image loader. Written in ES6.

## Downloading
Download SnoozeSquad from this repo. Links:

Version		| Link								| curl command
------------|-----------------------------------|-----------------------------
Unminified	| (coming soon!)					| (coming soon!)
Minified	| (coming soon!)					| (coming soon!)

## Usage
Using Snooze Squad is really easy. Here's a simple example:

```javascript
window.snoozeSquad = new SnoozeSquad({});
```

The first parameter in the above is the _options object_. You can specify a number of options that are listed below if you want to. Note that the options object is currently _required_, and SnoozeSquad won't work without it.

Once you've got that set up, change the name of the `src` attribute of all images that you want to be lazy loaded to `data-src`. The contents of `data-src` will be copied over to the `src` attirbute when the image is woken up. Example:

```html
<!-- From this -->
<img src="/path/to/some/image.js" />

<!-- To this -->
<img data-src="/path/to/some/image.js" />
```

Note that no other attributes will be touched, so you can safely do whatever else you want to your images.

If for some reason the `data-src` attribute is unsuitable, you change change it with the `attributeName` parameter (see below).

## Options
You can pass Snooze Squad a number of options. Below is an explanation of each:

 * range - The number of screens within the current screen an image is allowed to get before it is woken up.
 * attributeName - The name of the attribute that we should copy over to wake image up.
 * updateInterval - The maximum interval at which we should update. Helps to prevent lag.



## License
Snooze Squad is licensed under the MIT license. See the [LICENSE](https://github.com/sbrl/SnoozeSquad/blob/master/LICENSE) file in this repository.
