type mergeHandlersProps = {
    [key: string]: unknown;
};
type EventHandler = (event: React.SyntheticEvent) => void;

// Type guard to check if a value is an EventHandler
const isEventHandler = (fn: unknown): fn is EventHandler => {
    return typeof fn === 'function';
};

// MergeHandlers merges multiple sets of props, combining event handlers (on*) and overriding other props (last one wins).
// - Event handlers with the same name are chained: each is called in order until event.defaultPrevented is true.
// - Non-event props (aria-*, role, tabIndex, etc.) are simply overwritten by the last value provided.
export const mergeHandlers = (...props: mergeHandlersProps[]): mergeHandlersProps => {
    const merged: mergeHandlersProps = {};
    const handlerMap: Record<string, EventHandler[]> = {};

    // Collect all event handlers (keys starting with 'on') and other props from each props object
    props.forEach(propsObj => {
        Object.entries(propsObj).forEach(([key, value]) => {
            // If the key is an event handler (on*) and a function, collect it for merging
            if (key.startsWith('on') && isEventHandler(value)) {
                if (!handlerMap[key]) {
                    handlerMap[key] = [];
                }

                handlerMap[key].push(value);
            } else {
                // For non-event props, just assign (last one wins)
                merged[key] = value;
            }
        });
    });

    // Merge all collected event handlers for each event type
    Object.entries(handlerMap).forEach(([key, handlers]) => {
        if (handlers.length === 1) {
            // Only one handler: assign directly
            merged[key] = handlers[0];
        } else if (handlers.length > 1) {
            // Multiple handlers: chain them, stopping if event.defaultPrevented is set
            merged[key] = (event: React.SyntheticEvent) => {
                for (const handler of handlers) {
                    handler(event);
                    if (event.defaultPrevented) {
                        break;
                    }
                }
            };
        }
    });

    return merged;
};
