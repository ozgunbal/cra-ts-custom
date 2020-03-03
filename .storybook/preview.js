import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import GlobalStyles from '../src/globalStyle';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// For global styles and theme
addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
))
