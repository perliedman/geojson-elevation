GeoJSON Elevation
=================

[![Greenkeeper badge](https://badges.greenkeeper.io/perliedman/geojson-elevation.svg)](https://greenkeeper.io/)

[![npm version](https://img.shields.io/npm/v/geojson-elevation.svg)](https://www.npmjs.com/package/geojson-elevation) [![Build status](https://travis-ci.org/perliedman/geojson-elevation.png)](https://travis-ci.org/perliedman/geojson-elevation)

Add juicy elevation data to your fresh [GeoJSON](http://geojson.org/).

Check out the [demo app](http://www.liedman.net/elevation-service/), if you want to get a feel for it.

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
