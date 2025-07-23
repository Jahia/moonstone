import { addons } from 'storybook/manager-api'
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
        style: {
            backgroundColor: '#caeaf8',
            color: '#004781',
        },
        tooltip: 'This component has been updated since last version',
      },
    //   display: {
    //     sidebar: [
    //         {type: 'component', skipInherited: false},
    //         {type: 'group', skipInherited: false},
    //     ],
    //     toolbar: true,
    //   },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})
