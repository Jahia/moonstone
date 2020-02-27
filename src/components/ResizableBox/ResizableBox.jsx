import React from 'react';
import {Resizable} from 're-resizable';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './ResizableBox.scss';
import HandleResize from '~/tokens/icons/asset/HandleResize.svg';

// WIP
// const zones = ['top', 'right', 'bottom', 'left', 'topRight', 'bottomRight', 'bottomLeft', 'topLeft'];
const zones = ['right'];

export const ResizableBox = ({enable, minWidth, maxWidth, defaultSize, className, size, children, onResizeStart, onResizing, onResizeStop, ...props}) => {
    const enableZones = {};

    zones.forEach(function (zone) {
        enableZones[zone] = enable.indexOf(zone) > -1;
    });

    return (
        <Resizable
            role="resizable-panel"
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
                    right: <HandleResize className={classnames(styles.resizable_handle_icon)} size="big"/>,
                    left: <HandleResize className={classnames(styles.resizable_handle_icon)} size="big"/>
                }
            }
            className={classnames(className)}
            onResize={onResizing}
            onResizeStart={onResizeStart}
            onResizeStop={onResizeStop}
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
     * Set the minimum width
     */
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Set the maximum width
     */
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Set the default size
     */
    defaultSize: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    /**
     * Manage the size
     */
    size: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    }),

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Function triggered when the resize begins
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     */
    onResizeStart: PropTypes.func,

    /**
     * Function on resizing
     * @param {object} e - event
     */
    onResizing: PropTypes.func,

    /**
     * Function triggered when the resize is finished
     * @param {object} e - Mouse event
     * @param {string} dir - Direction resized
     * @param {node} ref - HTML element resized
     * @param {object} delta - delta between after resize
     */
    onResizeStop: PropTypes.func
};

ResizableBox.displayName = 'ResizableBox';
