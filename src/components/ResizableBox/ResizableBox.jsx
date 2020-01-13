import React from 'react';
import {Resizable} from 're-resizable';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './ResizableBox.scss';
import DragHundle from '~/tokens/icons/asset/DragHundle.svg';

// WIP
// const zones = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];
const zones = ['right'];

export const ResizableBox = ({enable, minWidth, maxWidth, defaultSize, className, size, children, ...props}) => {
    const enableZones = {};

    zones.forEach(function (zone) {
        enableZones[zone] = enable.indexOf(zone) > -1;
    });

    return (
        <Resizable
            enable={enableZones}
            minWidth={minWidth}
            maxWidth={maxWidth}
            size={size}
            defaultSize={defaultSize}
            handleClasses={
                {
                    right: classnames(styles.resizable_handle),
                    left: classnames(styles.resizable_handle)
                }
            }
            handleComponent={
                {
                    right: <DragHundle className={classnames(styles.resizable_handle_icon)}/>,
                    left: <DragHundle className={classnames(styles.resizable_handle_icon)}/>
                }
            }
            className={classnames(className)}
            {...props}
        >
            {children}
        </Resizable>
    );
};

ResizableBox.defaultProps = {
    enable: ['right'],
    minWidth: 50,
    maxWidth: 200,
    size: {},
    defaultSize: {
        width: '100%',
        height: 'auto'
    },
    children: null,
    className: ''
};

ResizableBox.propTypes = {
    /**
     * Content of the component
     */
    children: PropTypes.node,

    /**
     *  Set the resizable area of the box
     */
    enable: PropTypes.arrayOf(PropTypes.oneOf(zones)),

    /**
     * Set the minimum width of a resizable component
     */
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Set the maximum width of a resizable component
     */
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Set the default size of a resizable component
     */
    defaultSize: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    size: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    /**
     * Additional classname
     */
    className: PropTypes.string
};
