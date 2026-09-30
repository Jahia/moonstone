import clsx from 'clsx';
import React from 'react';

import { Button, Dropdown, Typography } from '~/components';
import { layout } from '~/globals/css-utils.js';
import { ChevronFirstPage, ChevronLastPage, ChevronLeft, ChevronRight } from '~/icons';

import type { PaginationProps } from './Pagination.types';
import type { DropdownDataOption } from '~/components/Dropdown/Dropdown.types';

import styles from './Pagination.module.scss';

export const Pagination: React.FC<PaginationProps> = ({
    className,
    label = {
        itemsPerPage: 'Items',
        of: 'of',
    },
    i18n = {
        itemsPerPage: label.itemsPerPage,
        of: label.of,
    },
    itemsPerPageOptions = [25, 50, 100],
    itemsPerPage = itemsPerPageOptions[0],
    totalOfItems,
    currentPage,
    onItemsPerPageChange,
    onPageChange,
    ...props
}) => {
    // Runtime validation: Fail fast with clear error messages for invalid props
    if (currentPage < 1) {
        throw new Error('currentPage must always be >= 1');
    }

    if (itemsPerPageOptions.indexOf(itemsPerPage) === -1) {
        throw new Error('itemsPerPage must exist in itemsPerPageOptions');
    }

    const lastPage = Math.ceil(totalOfItems / itemsPerPage);
    const visibleRangeStart = ((currentPage - 1) * itemsPerPage) + 1;
    const visibleRangeEnd = Math.min(totalOfItems, currentPage * itemsPerPage);

    return (
        <div
            className={clsx(
                ['moonstone-pagination', styles['moonstone-pagination']],
                ['flexRow', layout.flexRow],
                ['alignCenter', layout.alignCenter],
                ['justifyEnd', layout.justifyEnd],
                className,
            )}
            {...props}
        >
            <div
                className={clsx(
                    ['moonstone-pagination_navigation', styles['moonstone-pagination_navigation']],
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter],
                )}
            >
                <Button
                    isDisabled={currentPage === 1}
                    data-testid="pagination-button-first-page"
                    icon={<ChevronFirstPage/>}
                    variant="ghost"
                    onClick={() => onPageChange(1)}
                />
                <Button
                    isDisabled={currentPage === 1}
                    data-testid="pagination-button-previous-page"
                    icon={<ChevronLeft/>}
                    variant="ghost"
                    onClick={() => onPageChange(currentPage - 1)}
                />
            </div>
            <div
                className={clsx(
                    ['moonstone-pagination_info', styles['moonstone-pagination_info']],
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter],
                )}
            >
                <Typography
                    data-testid="pagination-total-items"
                    variant="caption"
                >
                    {`${visibleRangeStart}-${visibleRangeEnd} ${i18n.of} ${totalOfItems}`}
                </Typography>
                <div
                    className={clsx(
                        styles['moonstone-pagination_itemsPerPage'],
                        layout.flexRow,
                        layout.alignCenter,
                    )}
                >
                    <Typography variant="caption">{i18n.itemsPerPage}</Typography>
                    <Dropdown
                        data={itemsPerPageOptions.map((opt: number) => ({
                            label: opt.toString(),
                            value: opt.toString(),
                        }))}
                        data-testid="pagination-dropdown-items-per-page"
                        size="small"
                        value={itemsPerPage.toString()}
                        onChange={(event: React.MouseEvent, item: DropdownDataOption) => onItemsPerPageChange(parseInt(item.value, 10))}
                    />
                </div>
            </div>
            <div
                className={clsx(
                    ['moonstone-pagination_navigation', styles['moonstone-pagination_navigation']],
                    ['flexRow', layout.flexRow],
                    ['alignCenter', layout.alignCenter],
                )}
            >
                <Button
                    isDisabled={lastPage === currentPage}
                    data-testid="pagination-button-next-page"
                    icon={<ChevronRight/>}
                    variant="ghost"
                    onClick={() => onPageChange(currentPage + 1)}
                />
                <Button
                    isDisabled={lastPage === currentPage}
                    data-testid="pagination-button-last-page"
                    icon={<ChevronLastPage/>}
                    variant="ghost"
                    onClick={() => onPageChange(lastPage)}
                />
            </div>
        </div>
    );
};

Pagination.displayName = 'Pagination';
