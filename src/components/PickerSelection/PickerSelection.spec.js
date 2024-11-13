import React from 'react';
import {render, screen} from '@testing-library/react';
import {PickerSelectionItem} from './PickerSelectionItem';

import {PickerSelection} from './index';

describe('PickerSelection', () => {
    it('should display children', () => {
        render(
            <PickerSelection>
                <PickerSelectionItem key="chip" title="Item name" subtitle="(system name)" description="more information"/>
                <PickerSelectionItem key="chip2" title="Item name2" subtitle="(system name)" description="more information"/>
            </PickerSelection>
        );
        expect(screen.getByText('Item name')).toBeInTheDocument();
    });
});
