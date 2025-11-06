const interceptorInterval = setInterval(function() {
    if (typeof window.google !== 'undefined' && typeof window.google.maps !== 'undefined') {
        clearInterval(interceptorInterval);
        const originalMapConstructor = window.google.maps.Map;
        window.google.maps.Map = function(...args) {
            const mapInstance = new originalMapConstructor(...args);
            const streetViewLayer = new google.maps.StreetViewCoverageLayer();
            streetViewLayer.setMap(mapInstance);
            window.myMap = mapInstance;
            window.myCustomStreetViewLayer = streetViewLayer;
            
            window.google.maps.Map = originalMapConstructor;
            
            return mapInstance;
        };
    }
}, 100);