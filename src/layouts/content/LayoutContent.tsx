import React from 'react';
import clsx from 'clsx';
import {LayoutContentProps} from './LayoutContent.types';
import './LayoutContent.scss';

import {Loader} from '~/components/Loader';

export const LayoutContent: React.FC<LayoutContentProps> = ({
    header,
    content,
    isLoading = false,
    isCentered = false,
    className,
    ...props
}) => {
        const classNameProps = clsx(
            'flexFluid',
            'moonstone-layoutContent',
            isLoading ? ['flexCol_center', 'alignCenter'] : 'flexCol_nowrap',
        );
    return (
        <div className={clsx('flexCol', 'flexFluid', className)} {...props}>
            {header}
            <div className={classNameProps} role-busy={isLoading ? 'true' : undefined}>
                {
                    isLoading
                    ? <Loader size="big"/>
                    : (
                        isCentered
                        ? (
                            <div className={clsx('flexCol_nowrap', 'flexFluid', {'moonstone-layoutContent_centered': isCentered})}>
                                {content}
                            </div>
                        )
                        : content
                      )
                }
            </div>
        </div>
    );
}


LayoutContent.displayName = 'LayoutContent';
