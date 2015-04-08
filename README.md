GeoJSON Elevation
=================

Add juicy elevation data to your fresh [GeoJSON](http://geojson.org/).

## Install

```
npm install --save geojson-elevation
```

## Use

The module exports a single function, `addElevation`:

```js
addElevation(geojson, elevationProvider, cb)
```

Where

* `geojson` is the GeoJSON object to add elevation data to
* `elevationProvider` is an object with the method `getElevation(latLng, cb)` - typically,
  you pass a `TileSet` instance from [node-hgt](https://github.com/perliedman/node-hgt)
* `cb` is a callback that is called when the elevation data has been added (or an error occurs),
  the callback should take to args: `err` (undefined if the operation succeeds) and `geojson`, which
  is the GeoJSON instance that was passed to the function

Example:

```js
var addElevation = require('geojson-elevation').addElevation,
    TileSet = require('node-hgt').TileSet;

addElevation(geojson, new TileSet('./data'), function(err) {
    if (!err) {
        console.log(JSON.stringify(geojson));
    } else {
        console.log(err);
    }
});
```
