import React from 'react';
import clsx from 'clsx';
import {Typography} from '~/components';
import type {SecondaryNavHeaderProps} from './SecondaryNavHeader.types';
import {layout} from '~/globals/css-utils.js';
import {secondaryNavHeaderStyles as styles} from '../styles';

export const SecondaryNavHeader: React.FC<SecondaryNavHeaderProps> = ({children}) => (
    <Typography component="header"
                aria-label="moonstone-secondaryNavHeader"
                className={clsx(
                    ['moonstone-secondaryNavHeader', styles['moonstone-secondaryNavHeader']],
                    ['flexCol_center', layout.flexCol_center],
                    ['alignCenter', layout.alignCenter]
                )}
                variant="heading"
    >
        {children}
    </Typography>
);

SecondaryNavHeader.displayName = 'SecondaryNavHeader';
