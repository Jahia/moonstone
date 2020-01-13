import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNav.scss';
import {ResizableBox} from '~/components/ResizableBox';
import ChevronDoubleRight from '~/icons/asset/ChevronDoubleRight.svg';
import ChevronDoubleLeft from '~/icons/asset/ChevronDoubleLeft.svg';

export const SecondaryNav = ({header, children, isVisible, onToggleVisible, className, ...props}) => {
    const [stateIsVisible, setStateIsVisible] = useState(isVisible);

    const handleToggleVisible = e => {
        setStateIsVisible(prevState => !prevState);
        onToggleVisible(e);
    };

    return (
        <ResizableBox
            className={
                classnames(
                    className,
                    'flexFluid',
                    'flexCol_nowrap',
                    styles.secondaryNav,
                    stateIsVisible ? null : styles.secondaryNav_hidden
                )
            }
            enable={['right']}
            size={stateIsVisible ? null : {width: 0}}
            minWidth="120"
            maxWidth="450"
            defaultSize={{
                width: 245
            }}
            {...props}
        >
            <button type="button"
                    className={classnames(styles.secondaryNav_buttonToggle)}
                    onClick={handleToggleVisible}
            >
                {stateIsVisible &&
                    <ChevronDoubleLeft size="small"/>}
                {!stateIsVisible &&
                    <ChevronDoubleRight size="small"/>}
            </button>

            <div className={classnames(styles.secondaryNav_wrapper, 'flexFluid', 'flexCol_nowrap')}>
                <header className={classnames(styles.secondaryNav_header, 'flexRow_center', 'alignCenter')}>
                    {header}
                </header>
                <div className={classnames('flexFluid', 'flexCol_nowrap')}>
                    {children}
                </div>
            </div>
        </ResizableBox>
    );
};

SecondaryNav.defaultProps = {
    isVisible: true,
    onToggleVisible: () => {}
};

SecondaryNav.propTypes = {
    /**
     * Is visible or hidden
     */
    isVisible: PropTypes.bool,

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
    onToggleVisible: PropTypes.func
};
