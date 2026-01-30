import {useState} from 'react';
import preview from '~storybook/preview';
import {Collapsible} from './index';
import type {CollapsibleProps} from './Collapsible.types';

const meta = preview.meta({
    title: 'Components/Collapsible',
    component: Collapsible,
    parameters: {
        actions: {argTypesRegex: '^on.*'}
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
});

const BodyCollapsible = () => {
    return (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam
            eleifend mi in nulla posuere sollicitudin aliquam. Arcu bibendum at varius
            vel pharetra vel turpis nunc eget. Ac turpis egestas maecenas pharetra
            convallis posuere morbi leo. Sit amet facilisis magna etiam. Nulla
            facilisi cras fermentum odio eu feugiat pretium nibh. Nunc sed augue lacus
            viverra vitae congue. Ut ornare lectus sit amet est. Id faucibus nisl
            tincidunt eget nullam non nisi. Arcu dictum varius duis at consectetur
            lorem. Libero nunc consequat interdum varius sit amet. Venenatis tellus in
            metus vulputate eu scelerisque felis imperdiet proin. Mauris sit amet
            massa vitae tortor condimentum lacinia quis. Enim lobortis scelerisque
            fermentum dui faucibus in ornare quam viverra. Sit amet risus nullam eget
            felis eget nunc. Et odio pellentesque diam volutpat commodo. Ac turpis
            egestas sed tempus urna et pharetra. Pretium lectus quam id leo in vitae
            turpis massa. Lorem ipsum dolor sit amet.Eu volutpat odio facilisis
            mauris. Ac felis donec et odio pellentesque diam volutpat. Et egestas quis
            ipsum suspendisse ultrices gravida dictum fusce ut. At varius vel pharetra
            vel turpis. Id faucibus nisl tincidunt eget nullam non. Ut porttitor leo a
            diam. Pellentesque massa placerat duis ultricies lacus. Id cursus metus
            aliquam eleifend mi in. Ornare arcu dui vivamus arcu felis bibendum ut
            tristique. Massa id neque aliquam vestibulum morbi blandit cursus. Mauris
            vitae ultricies leo integer. Ut sem nulla pharetra diam sit amet. Volutpat
            odio facilisis mauris sit amet massa vitae tortor. Lorem ipsum dolor sit
            amet consectetur adipiscing elit ut aliquam. Euismod in pellentesque massa
            placerat duis ultricies. Posuere sollicitudin aliquam ultrices sagittis
            orci a. Ac tortor vitae purus faucibus ornare suspendisse. Viverra nibh
            cras pulvinar mattis nunc sed. Nisl pretium fusce id velit ut tortor
            pretium. Id porta nibh venenatis cras sed felis eget velit. Vestibulum sed
            arcu non odio euismod lacinia at. Turpis cursus in hac habitasse platea.
            Non tellus orci ac auctor augue mauris augue neque. Pretium vulputate
            sapien nec sagittis aliquam malesuada bibendum arcu vitae. Vel turpis nunc
            eget lorem dolor sed. Ut consequat semper viverra nam. Dui accumsan sit
            amet nulla facilisi morbi tempus iaculis. Malesuada nunc vel risus commodo
            viverra maecenas. Non nisi est sit amet facilisis magna etiam tempor orci.
            Ut venenatis tellus in metus vulputate eu scelerisque felis. Diam maecenas
            sed enim ut sem viverra aliquet eget sit. Nunc sed id semper risus in
            hendrerit. Et malesuada fames ac turpis. Rhoncus mattis rhoncus urna neque
            viverra justo nec ultrices. Id aliquet risus feugiat in ante. Nunc
            consequat interdum varius sit amet mattis vulputate. Purus viverra
            accumsan in nisl nisi scelerisque eu ultrices vitae. Feugiat in ante metus
            dictum at tempor. Aliquam eleifend mi in nulla. Pretium viverra
            suspendisse potenti nullam ac tortor vitae purus faucibus. Odio tempor
            orci dapibus ultrices in iaculis.Nibh tortor id aliquet lectus proin.
            Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Tincidunt
            ornare massa eget egestas purus viverra. Quam elementum pulvinar etiam non
            quam lacus. Vulputate eu scelerisque felis imperdiet proin fermentum.
            Lorem sed risus ultricies tristique nulla. Cursus in hac habitasse platea
            dictumst quisque sagittis. Sem nulla pharetra diam sit. Sed cras ornare
            arcu dui vivamus. Mi bibendum neque egestas congue quisque egestas diam.
        </p>
    );
};

export const Uncontrolled = meta.story({
    args: {
        label: 'Collapsible label',
        children: <BodyCollapsible/>,
        isDefaultExpanded: false
    }
});

export const Controlled = meta.story({
    render: (args: CollapsibleProps) => {
        const [isExpanded, setIsExpanded] = useState(false);
        const handleOnClick = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <Collapsible
                {...args}
                isExpanded={isExpanded}
                onClick={() => handleOnClick()}
            />
        );
    },
    args: {
        label: 'Collapsible label',
        children: <BodyCollapsible/>
    }
});

export const StickyCollapsibles = meta.story({
    render: ({label, children, ...args}: CollapsibleProps) => {
        return (
            <>
                <Collapsible {...args} label={`${label} 1`}>
                    {children}
                </Collapsible>
                <Collapsible {...args} label={`${label} 2`}>
                    {children}
                </Collapsible>
                <Collapsible {...args} label={`${label} 3`}>
                    {children}
                </Collapsible>
                <Collapsible {...args} label={`${label} 4`}>
                    {children}
                </Collapsible>
            </>
        );
    },
    args: {
        label: 'Collapsible',
        children: <BodyCollapsible/>
    }
});
