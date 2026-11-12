import React, { useEffect } from 'react';

import { warnOnce } from '~/utils/warnOnce';

/**
 * Wraps an icon that `@jahia/moonstone` exports, so that rendering it warns once that this import path is deprecated:
 * a component and an icon of the same name cannot both be exported from one place.
 */
export const deprecatedIcon = <P extends object>(Icon: (props: P) => React.JSX.Element) => {
    const DeprecatedIcon = (props: P) => {
        useEffect(() => {
            warnOnce('icons-root-import', 'The option to import icons from @jahia/moonstone is deprecated, and it will be removed in a future release. Please import icons from @jahia/moonstone/icons instead.');
        }, []);

        return <Icon {...props}/>;
    };

    return DeprecatedIcon;
};
