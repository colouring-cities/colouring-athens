interface MapViewport {
    position: [number, number];
    zoom: number;
    bounds: [[number, number], [number, number]];
}

export const initialMapViewport: MapViewport = {
  // position: [51.5245255, -0.1338422], // lat,lng
  bounds: null,
  position: [37.983810, 23.727539],

  zoom: 15,
};

export type MapTheme = 'light' | 'night';

export const mapBackgroundColor: Record<MapTheme, string> = {
    light: '#F0EEEB',
    night: '#162639'
};
