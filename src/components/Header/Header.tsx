import React from 'react';
import clsx from 'clsx';

import {HeaderProps} from './Header.types';
import './Header.scss';
import {Separator, Typography} from '~/components';
import {ArrowLeft} from '~/icons';

export const Header: React.FC<HeaderProps> = ({
                                                  title,
                                                  search = null,
                                                  mainActions,
                                                  status,
                                                  contentType,
                                                  toolbarRight,
                                                  toolbarLeft,
                                                  backButton = null,
                                                  breadcrumb,
                                                  className,
                                                  ...props
                                              }: HeaderProps) => {
    const hasInformationArea = Boolean(breadcrumb || contentType || status);
    const hasToolbar = Boolean(toolbarLeft || toolbarRight);

    return (
        <header className={clsx('moonstone-header', className)} {...props}>
            {/* Main area */}
            <div className={clsx('moonstone-header_main', 'flexRow', 'alignCenter', 'flexFluid')}>
                { backButton && React.cloneElement(backButton, {
                    className: 'moonstone-header_back',
                    variant: 'outlined',
                    icon: <ArrowLeft/>
                })}

                <Typography isNowrap component="h1" variant="title" className={clsx('flexFluid', 'moonstone-header_title')}>{title}</Typography>

                { search && (
                    <div className={clsx('moonstone-header_search')}>
                        { search }
                    </div>
                )}

                { mainActions && (
                    <div className={clsx('moonstone-header_mainActions', 'moonstone-header_actions')}>
                        { mainActions }
                    </div>
                )}
            </div>

            { hasInformationArea && (
                <div className={clsx('flexRow_between', 'alignCenter', 'moonstone-header_information')}>
                    <div className={clsx('flexRow_nowrap', 'alignCenter', 'flexFluid', 'moonstone-header_informationLeft')}>
                        { breadcrumb }
                        { <Separator variant="vertical" spacing="medium" invisible="firstOrLastChild"/> }
                        { contentType }
                    </div>
                    {status && (
                        <div className={clsx('flexRow_reverse', 'alignCenter', 'moonstone-header_informationRight', 'moonstone-header_actions')}>
                            { status }
                        </div>
                    )}
                </div>
            )}

            <Separator invisible="firstOrLastChild"/>

            {hasToolbar && (
                <div role="toolbar" className={clsx('flexRow_between', 'alignCenter', 'moonstone-header_toolbar')}>
                    <div className={clsx('flexRow', 'alignCenter', 'flexFluid', 'moonstone-header_actions')}>
                        { toolbarLeft }
                    </div>
                    <div className={clsx('flexRow', 'alignCenter', 'moonstone-header_actions')}>
                        { toolbarRight }
                    </div>
                </div>
            )}
        </header>
    );
};

Header.displayName = 'Header';
