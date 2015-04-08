var coordEach = require('turf-meta').coordEach;

module.exports = {
    addElevation: function(geojson, elevationProvider, cb) {
        var waiting = 0;

        coordEach(geojson, function(coords) {
            waiting++;

            elevationProvider.getElevation([coords[1], coords[0]], function(err, elevation) {
                if (err) {
                    cb(err);
                    waiting  = -1;
                } else {
                    coords[2] = elevation;
                    waiting--;
                }

                if (waiting === 0) {
                    cb(undefined, geojson);
                }
            });
        });
    }
};
