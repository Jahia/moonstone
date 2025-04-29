import React from 'react';
import clsx from 'clsx';
import './SecondaryNavHeader.scss';
import {Typography} from '~/components/Typography';
import {SecondaryNavHeaderProps} from './SecondaryNavHeader.types';

export const SecondaryNavHeader: React.FC<SecondaryNavHeaderProps> = ({children}) => (
    <Typography component="div"
                className={clsx('moonstone-secondaryNavHeader', 'flexCol_center', 'alignCenter')}
                variant="heading"
    >
        {children}
    </Typography>
);

SecondaryNavHeader.displayName = 'SecondaryNavHeader';
