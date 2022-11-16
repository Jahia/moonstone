import React, {useState} from 'react';
import './Radio.scss';
import {RadioProps} from './Radio.types';
import {ControlledRadio} from '~/components/Radio/ControlledRadio';

export const UncontrolledRadio: React.FC<RadioProps> = ({defaultChecked = false, ...props}) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
        <ControlledRadio {...props}
                         checked={checked}
                         onChange={event => {
                                setChecked(event.target.checked);
                            }}
        />
    );
};

UncontrolledRadio.displayName = 'UncontrolledRadio';
