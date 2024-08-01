import React from 'react';
import { ImageProvider } from './src/context/ImageContext';

export const wrapRootElement = ({ element }) => (
  <ImageProvider>
    {element}
  </ImageProvider>
);