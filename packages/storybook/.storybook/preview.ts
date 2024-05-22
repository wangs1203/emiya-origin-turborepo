import type { Preview } from '@storybook/react';

import './index.less';
// eslint-disable-next-line import/no-relative-packages -- disable
import '../../rc/src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(?<props>background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
