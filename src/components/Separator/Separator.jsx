import React, {useContext} from 'react';
import classnames from 'clsx';
import {PrimaryNavContext} from '../PrimaryNav';

export const Separator = () => {
    const primaryNavContext = useContext(PrimaryNavContext);
    return (
        <li className={classnames('flexRow', 'flexRow_center', 'alignCenter')}>
            {
                primaryNavContext.isExpanded ?
                    <svg width="267" height="1" viewBox="0 0 267 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="267" height="1" fill="#7A7F88" fillOpacity="0.4"/>
                    </svg> :
                    <svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="1" rx="0.5" fill="#7A7F88" fillOpacity="0.4"/>
                    </svg>
            }
        </li>
    );
};
