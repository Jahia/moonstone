import React from 'react';

import {SortIndicatorProps} from './SortIndicator.types';
import './SortIndicator.scss';
import {ArrowDown, ArrowUp} from '~/icons';

export const SortIndicator: React.FC<SortIndicatorProps> = ({direction, ...props}) => {
    if (direction === 'descending') {
        return <div className="flexRow moonstone-SortIndicator-descending"><ArrowDown {...props}/></div>;
    }
    if (direction === 'ascending') {
        return <div className="flexRow moonstone-SortIndicator-ascending"><ArrowUp {...props}/></div>
    }
    // Default direction to show SortIndicator is with the arrow downwards
    return <div className="flexRow moonstone-SortIndicator-default"><ArrowDown {...props}/></div>;
};

SortIndicator.displayName = 'SortIndicator';
