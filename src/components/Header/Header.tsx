import React from 'react';
import clsx from 'clsx';

import {HeaderProps} from './Header.types';
import styles from './Header.module.scss';
import {Separator, Typography} from '~/components';
import {layout, reset} from '~/globals/css-utils.js';

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

    if (backButton !== null) {
        console.warn('backButton is deprecated and will be removed in a future release.');
    }

    return (
        <header className={clsx(reset, 'moonstone-header', styles['moonstone-header'], className)} {...props}>
            {/* Main area */}
            <div
                className={clsx(
                    ['moonstone-header_main', styles['moonstone-header_main']],
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter],
                    ['flexFluid', layout.flexFluid]
                )}
            >
                { backButton && (
                    <div className={clsx('moonstone-header_back', styles['moonstone-header_back'])}>
                        {backButton}
                    </div>
                )}

                <Typography
                    isNowrap
                    component="h1"
                    variant="title"
                    className={clsx(
                        ['flexFluid', layout.flexFluid],
                        ['moonstone-header_title', styles['moonstone-header_title']]
                    )}
                >{title}
                </Typography>

                { search && (
                    <div className={clsx('moonstone-header_search', styles['moonstone-header_search'])}>
                        { search }
                    </div>
                )}

                { mainActions && (
                    <div
                        className={clsx(
                            'moonstone-header_mainActions',
                            ['moonstone-header_actions', styles['moonstone-header_actions']],
                            ['flexRow', layout.flexRow],
                            ['alignCenter', layout.alignCenter]
                        )}
                    >
                        { mainActions }
                    </div>
                )}
            </div>

            { hasInformationArea && (
                <div
                    className={clsx(
                        ['flexRow_between', layout.flexRow_between],
                        ['alignCenter', layout.alignCenter],
                        ['moonstone-header_information', styles['moonstone-header_information']]
                    )}
                >
                    <div
                        className={clsx(
                            ['flexRow_nowrap', layout.flexRow_nowrap],
                            ['alignCenter', layout.alignCenter],
                            ['flexFluid', layout.flexFluid],
                            ['moonstone-header_informationLeft', styles['moonstone-header_informationLeft']]
                        )}
                    >
                        { breadcrumb }
                        <Separator variant="vertical" spacing="small" invisible="firstOrLastChild"/>
                        { contentType }
                    </div>
                    {status && (
                        <div
                            className={clsx(
                                ['flexRow_reverse', layout.flexRow_reverse],
                                ['moonstone-header_informationRight', styles['moonstone-header_informationRight']],
                                ['moonstone-header_actions', styles['moonstone-header_actions']]
                            )}
                        >
                            { status }
                        </div>
                    )}
                </div>
            )}

            {hasToolbar && (
                <>
                    {hasInformationArea && <Separator spacing="none"/>}
                    <div
                        role="toolbar"
                        className={clsx(
                            ['flexRow_between', layout.flexRow_between],
                            ['alignCenter', layout.alignCenter],
                            ['moonstone-header_toolbar', styles['moonstone-header_toolbar']]
                        )}
                    >
                        <div
                            className={clsx(
                                ['flexRow', layout.flexRow],
                                ['alignCenter', layout.alignCenter],
                                ['flexFluid', layout.flexFluid],
                                ['moonstone-header_actions', styles['moonstone-header_actions']]
                            )}
                        >
                            { toolbarLeft }
                        </div>
                        <div className={clsx(['flexRow', layout.flexRow], ['alignCenter', layout.alignCenter], ['moonstone-header_actions', styles['moonstone-header_actions']])}>
                            { toolbarRight }
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

Header.displayName = 'Header';
