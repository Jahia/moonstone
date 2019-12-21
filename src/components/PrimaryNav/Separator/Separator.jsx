import React, {useContext} from 'react';
import classnames from 'clsx';
import {PrimaryNavContext} from '../index';

export const Separator = () => {
    const primaryNavContext = useContext(PrimaryNavContext);
    return (
        <li className={classnames('flexRow', 'flexRow_center', 'alignCenter')}>
            {
                primaryNavContext.isExpanded ?
                    <svg width="300" height="1" viewBox="0 0 300 1" fill="none">
                        <rect x="16" width="267" height="1" fill="#7A7F88" fillOpacity="0.4"/>
                    </svg> :
                    <svg width="56" height="1" viewBox="0 0 56 1" fill="none">
                        <rect x="16" width="24" height="1" rx="0.5" fill="#7A7F88" fillOpacity="0.4"/>
                    </svg>
            }
        </li>
    );
};
