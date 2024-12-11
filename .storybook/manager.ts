import { addons } from '@storybook/manager-api'
import {
  defaultConfig,
  type TagBadgeParameters,
} from 'storybook-addon-tag-badges'

addons.setConfig({
  tagBadges: [
    {
      tags: 'updated',
      badge: {
        text: 'Updated',
        bgColor: '#caeaf8',
        fgColor: '#004781',
        tooltip: 'This component has been updated since last version',
      },
      display: {
        sidebar: ['component', 'group'],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})