import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNav.scss';
import {ResizableBox} from '~/components/ResizableBox';
import ChevronDoubleRight from '~/tokens/icons/asset/ChevronDoubleRight.svg';
import ChevronDoubleLeft from '~/tokens/icons/asset/ChevronDoubleLeft.svg';

export const SecondaryNav = ({header, children, isDefaultVisible, onToggled, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(isDefaultVisible);

    const handleToggle = e => {
        setIsVisible(prevState => !prevState);
        onToggled(e);
    };

    return (
        <ResizableBox
            className={
                classnames(
                    className,
                    'flexFluid',
                    'flexCol_nowrap',
                    styles.secondaryNav,
                    isVisible ? null : styles.secondaryNav_hidden
                )
            }
            enable={['right']}
            size={isVisible ? {height: '0%'} : {height: '0%', width: 0}}
            minWidth={isVisible ? 245 : 0}
            maxWidth="900"
            defaultSize={{
                width: 245
            }}
            {...props}
        >
            <button type="button"
                    className={classnames(styles.secondaryNav_buttonToggle)}
                    onClick={handleToggle}
            >
                {isVisible &&
                    <ChevronDoubleLeft/>}
                {!isVisible &&
                    <ChevronDoubleRight/>}
            </button>

            <div className={classnames(styles.secondaryNav_wrapper, 'flexFluid', 'flexCol_nowrap')}>
                {header}
                <div className={classnames('flexFluid', 'flexCol_nowrap')}>
                    {children}
                </div>
            </div>
        </ResizableBox>
    );
};

SecondaryNav.defaultProps = {
    isDefaultVisible: true,
    onToggled: () => {}
};

SecondaryNav.propTypes = {
    /**
     * Is visible or hidden by default
     */
    isDefaultVisible: PropTypes.bool,

    /**
     * Header of the secondary navigation
     */
    header: PropTypes.node.isRequired,

    /**
     * Content of the component
     */
    children: PropTypes.node.isRequired,

    /**
     * Additional classname
     */
    className: PropTypes.string,

    /**
     * Triggered when the visibility is toggled
     */
    onToggled: PropTypes.func
};

SecondaryNav.displayName = 'SecondaryNav';
