import clsx from 'clsx';
import React from 'react';

import { Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';

import type { SecondaryNavHeaderProps } from './SecondaryNavHeader.types';

import styles from './SecondaryNavHeader.module.scss';

export const SecondaryNavHeader: React.FC<SecondaryNavHeaderProps> = ({ children }) => (
    <Typography
        aria-label="moonstone-secondaryNavHeader"
        className={clsx(
            ['moonstone-secondaryNavHeader', styles['moonstone-secondaryNavHeader']],
            ['flexCol_center', layout.flexCol_center],
            ['alignCenter', layout.alignCenter],
        )}
        component="header"
        variant="heading"
    >
        {children}
    </Typography>
);

SecondaryNavHeader.displayName = 'SecondaryNavHeader';
