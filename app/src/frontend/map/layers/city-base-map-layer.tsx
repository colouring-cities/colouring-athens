import * as React from 'react';
import { TileLayer } from 'react-leaflet';

import { MapTheme } from '../../config/map-config';

const OS_API_KEY = 'UVWEspgInusDKKYANE5bmyddoEmCSD4r';

/**
 * Base raster layer for the map.
 * @param theme map theme
 */
export function CityBaseMapLayer({ theme }: { theme: MapTheme }) {

    /**
     * Ordnance Survey maps - UK / London specific
     * (replace with appropriate base map for other cities/countries)
     */
    const apiKey = OS_API_KEY;

    // Note that OS APIs does not provide dark theme
    // const layer = 'Light_3857';
    const layer = theme === 'light'? 'light_all' : 'dark_all';

    // In either theme case, we will use OS's light theme, but add our own filter
    const theme_class = theme === 'light' ? "light-theme" : "night-theme";

    const baseUrl = `https://{s}.basemaps.cartocdn.com/${layer}/{z}/{x}/{y}{r}.png`;
    const attribution = 'Building attribute data is © Colouring Athens contributors. &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

    return <TileLayer
        url={baseUrl}
        attribution={attribution}
        maxNativeZoom={18}
        maxZoom={19}
    />;
}

        // detectRetina={true}
        // className={theme_class}
