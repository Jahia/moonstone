import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'clsx';
import styles from './SecondaryNav.scss';
import {ResizableBox} from '~/components/ResizableBox';
import ChevronDoubleRight from '~/tokens/icons/asset/ChevronDoubleRight.svg';
import ChevronDoubleLeft from '~/tokens/icons/asset/ChevronDoubleLeft.svg';

export const SecondaryNav = ({header, children, isDefaultVisible, onToggle, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(isDefaultVisible);

    const handleToggle = e => {
        setIsVisible(prevState => !prevState);
        onToggle(e);
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
            size={isVisible ? null : {width: 0}}
            minWidth="120"
            maxWidth="450"
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
                    <ChevronDoubleLeft size="small"/>}
                {!isVisible &&
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
    isDefaultVisible: true,
    onToggle: () => {}
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
    onToggle: PropTypes.func
};
