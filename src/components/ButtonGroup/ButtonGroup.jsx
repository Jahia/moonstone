import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.scss';
import classnames from 'clsx';
import {buttonSizes, buttonVariants, buttonColors} from '~/components/Button';

export const ButtonGroup = ({size, isReversed, variant, color, className, children, ...props}) => {
    return (
        <div role="group"
             className={classnames(
                'moonstone-buttonGroup',
                className,
                'flexRow',
                'alignCenter'
            )}
             {...props}
        >
            {
                React.Children.map(children, button => {
                    if (!React.isValidElement(button)) {
                        return null;
                    }

                    return (
                        <button.type
                            {...button.props}
                            size={size}
                            variant={variant}
                            isReversed={isReversed}
                            color={color}
                            className={classnames(
                                `variant_${variant}`,
                                `color_${color}`
                            )}
                        />
                    );
                })
            }
        </div>
    );
};

ButtonGroup.defaultProps = {
    size: 'default',
    variant: 'default',
    color: 'default',
    isReversed: false,
    className: null
};

ButtonGroup.propTypes = {
    /**
     * Buttons grouped
     */
    children: PropTypes.node.isRequired,

    /**
     * Buttons size
     */
    size: PropTypes.oneOf(buttonSizes),

    /**
     * Button style
     */
    variant: PropTypes.oneOf(buttonVariants),

    /**
     * Button color
     */
    color: PropTypes.oneOf(buttonColors),

    /**
     * Is button color reversed
     */
    isReversed: PropTypes.bool,

    /**
     * Additional classname
     */
    className: PropTypes.string
};

ButtonGroup.displayName = 'ButtonGroup';
