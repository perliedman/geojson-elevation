var coordEach = require('turf-meta').coordEach;

module.exports = {
    addElevation: function(geojson, elevationProvider, cb, nodata) {
        var waiting = 0,
            allProcessed = false;

        coordEach(geojson, function(coords) {
            waiting++;

            elevationProvider.getElevation([coords[1], coords[0]], function(err, elevation) {
                if (err) {
                    if(nodata != null) {
                        coords[2] = nodata;
                        waiting --;
                    } else {
                        cb(err);
                        waiting  = -1;
                    }
                } else {
                    coords[2] = elevation;
                    waiting--;
                }

                if (allProcessed && waiting === 0) {
                    cb(undefined, geojson);
                }
            });
        });

        allProcessed = true;
        if (waiting === 0) {
            cb(undefined, geojson);
        }
    }
};
