import React from 'react';
import clsx from 'clsx';
import styles from './SecondaryNavHeader.module.scss';
import {Typography} from '~/components/Typography';
import {SecondaryNavHeaderProps} from './SecondaryNavHeader.types';
import {layout} from '~/globals/css-utils.js';

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
