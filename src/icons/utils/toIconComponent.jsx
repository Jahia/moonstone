import React from 'react';
import * as Icons from '~/icons/assets';
import {SvgWrapper} from '~/components/SvgWrapper';
import {ImgWrapper} from '~/components/ImgWrapper';

const toIconComponent = (icon, props) => {
    if (Icons[icon]) {
        return React.createElement(Icons[icon], props);
    }

    if (icon.startsWith('<svg')) {
        return <SvgWrapper svg={icon} {...props}/>;
    }

    return <ImgWrapper src={icon} {...props}/>;
};

export {toIconComponent};
