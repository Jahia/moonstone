import React from 'react';
import clsx from 'clsx';
import {LayoutContentProps} from './LayoutContent.types';
import './LayoutContent.scss';

import {Loader} from '~/components/Loader';

export const LayoutContent: React.FC<LayoutContentProps> = ({
    header = null,
    content = null,
    isLoading = false,
    isCentered = false,
    hasPadding = false,
    className = '',
    ...props
}) => {
    const classNameProps = clsx(
        'flexFluid',
        'moonstone-layoutContent',
        {'moonstone-layoutContent_withNoPadding': !hasPadding},
        isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol'
    );
    return (
        <div className={clsx('flexCol', 'flexFluid', className)} {...props}>
            {header}
            <div className={clsx(classNameProps)} role-busy={isLoading ? 'true' : undefined}>
                {
                    isLoading
                    ? <Loader size="big"/>
                    : (
                        <div className={clsx('flexCol', 'flexFluid', {'moonstone-layoutContent_centered': isCentered})}>
                            {content}
                        </div>
                      )
                }
            </div>
        </div>
    );
}


LayoutContent.displayName = 'LayoutContent';
