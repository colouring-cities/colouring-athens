interface MapViewport {
    position: [number, number];
    zoom: number;
}

export const initialMapViewport: MapViewport = {
  // position: [51.5245255, -0.1338422], // lat,lng
  position: [37.983810, 23.727539],

  zoom: 16,
};

export type MapTheme = 'light' | 'night';

export const mapBackgroundColor: Record<MapTheme, string> = {
    light: '#F0EEEB',
    night: '#162639'
};
