import clsx from 'clsx';
import './TableCellStart.scss';
import type {TableCellStartProps} from './TableCellStart.types';

export const TableCellStart = ({
    className,
    component = 'td',
    children,
    ...props
}: TableCellStartProps) => {
    const classNameProps = clsx('moonstone-tableCellStart', className);
    const Component = component;

    return (
        <Component
            className={classNameProps}
            {...props}
        >
            {children}
        </Component>
    );
};

TableCellStart.displayName = 'TableCellStart';
