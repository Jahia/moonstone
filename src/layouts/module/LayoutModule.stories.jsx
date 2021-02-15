
import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean, text} from '@storybook/addon-knobs';

import {LayoutModule} from './index';
import markdownNotes from './LayoutModule.md';

const FakeNavigation = props => {
    return (
        <nav {...props}
             style={{
            width: '245px',
            height: '100vh',
            border: '5px solid gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >Nav
        </nav>
    );
};

const FakeHeader = props => {
    return (
        <header {...props}
                style={{
            width: '100%',
            height: '40px',
            border: '5px solid gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white'
        }}
        >Header
        </header>
    );
};

const FakeContent = props => {
    return (
        <div {...props}
             style={{
            width: '100%',
            border: '5px solid lightgray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet gravida arcu. Nunc eget ullamcorper neque. Pellentesque sit amet viverra orci. Praesent maximus lacus eget posuere posuere. Etiam id mollis lacus, ac efficitur elit. Donec eget posuere eros. Aliquam erat volutpat. Suspendisse in dictum nibh. Suspendisse sed ligula iaculis, semper ante sit amet, pretium sapien. Integer in blandit leo, eget placerat dui. Duis varius aliquam nunc, nec ornare metus.

            Vestibulum non rhoncus enim. Aliquam libero enim, hendrerit ac lobortis nec, ullamcorper vitae odio. Nam id vestibulum sapien, vitae vehicula ex. Sed eget quam molestie, aliquet libero in, sagittis eros. Nullam ut nulla vitae ex elementum rutrum. In lacus lacus, malesuada non ornare eu, luctus sed ipsum. Nullam viverra cursus magna, non eleifend purus eleifend eu. Ut vulputate lacus ac dolor placerat, sed accumsan diam bibendum.

            Mauris orci ex, aliquet vitae elit et, efficitur consequat tellus. Suspendisse venenatis velit sit amet nisl pretium posuere. Sed quis dictum ligula. Nulla interdum commodo eros, vitae consectetur felis porta a. Donec sagittis nisi in ex posuere accumsan. Donec cursus arcu consectetur, vehicula metus quis, commodo magna. Nunc eu odio odio. Nam velit quam, iaculis in imperdiet nec, facilisis eu nunc. Ut vel molestie leo. Etiam eu ultrices diam, sed ullamcorper lacus. Aliquam commodo posuere eros. Nam vulputate porttitor dolor, quis consequat leo consectetur eget. Cras commodo ex non magna vehicula porttitor. Suspendisse vitae nulla ut eros vestibulum tincidunt. Duis rhoncus sagittis quam, vel vestibulum nisl tempus eget. Fusce tincidunt sem eget metus maximus ullamcorper.

            Integer ut nunc sodales lacus consequat dapibus. Aenean ullamcorper, mauris nec varius viverra, eros orci posuere libero, vitae facilisis dolor justo vel libero. Pellentesque erat risus, rhoncus ut pretium quis, iaculis et mauris. Sed nec elit volutpat, varius nisl quis, malesuada odio. Curabitur nec tortor id lectus condimentum fringilla maximus at diam. Fusce odio felis, porta quis eros in, suscipit mattis enim. Proin ac tellus nisi. Vivamus vel dolor lectus. Donec eleifend dapibus massa, sed fringilla sem vulputate sed. Nullam dignissim sit amet turpis at iaculis. Cras quis feugiat ex, vitae commodo justo.

            Praesent auctor erat dolor, at tristique sapien maximus tincidunt. Nunc facilisis tortor eget vehicula convallis. Curabitur eget venenatis purus, vitae euismod ex. Nunc scelerisque ligula quis metus ullamcorper dignissim. Nullam tristique mollis gravida. Aliquam fermentum lorem quis orci blandit, sit amet molestie nulla accumsan. Vivamus elementum neque eros, a gravida enim varius nec. Sed pulvinar neque at libero malesuada interdum. Quisque ut nulla mi.

            Vivamus placerat lorem nec sapien porttitor, in fermentum leo tincidunt. Duis quis venenatis elit. Integer ac nisi id erat ultrices varius sed vel mi. Donec fermentum sapien ac leo dictum sodales. Phasellus ac bibendum nisi. Fusce nec lectus nec lectus porta dapibus vel eget sapien. Duis maximus finibus maximus. Proin vitae nulla augue.

            Nullam pretium est nec hendrerit rutrum. Pellentesque in porttitor libero. Quisque sit amet mauris leo. In hac habitasse platea dictumst. Etiam in est eu leo pretium luctus. Nullam et accumsan sapien, non euismod enim. Mauris sit amet elit maximus, condimentum risus rutrum, consequat ante. Nulla aliquam massa in dolor blandit condimentum. Praesent scelerisque porttitor congue.

            Nulla pellentesque mauris et libero maximus, luctus semper nunc tincidunt. Etiam vestibulum velit vel dui dictum, sed posuere sapien varius. Nam lobortis purus id nulla porta luctus. Etiam nunc lorem, ullamcorper ac pulvinar in, tristique et ipsum. Sed in elementum risus. Fusce congue, lorem nec aliquet cursus, lectus neque cursus ipsum, quis vestibulum libero magna eget mi. Suspendisse a tortor a purus faucibus dapibus suscipit ac est. Quisque eleifend eleifend tellus id sodales. Duis feugiat nulla ac felis aliquet dictum.

            Sed pulvinar, odio non porta facilisis, lacus leo rutrum mauris, bibendum tincidunt massa augue ac est. Ut posuere dictum turpis viverra facilisis. Integer faucibus erat dolor, tincidunt facilisis erat molestie eu. Aenean molestie arcu at elit efficitur, nec vestibulum nunc finibus. Duis tristique gravida maximus. Nullam ullamcorper, lectus quis finibus maximus, leo erat volutpat sem, in maximus orci ipsum vel tortor. Curabitur sem metus, sodales sit amet laoreet mollis, eleifend consequat tortor. Fusce varius neque id metus viverra, id sagittis nunc luctus. Vestibulum quis nulla scelerisque, finibus quam nec, blandit tellus. Maecenas mollis euismod purus. Donec turpis orci, ultricies hendrerit mauris sit amet, hendrerit venenatis est. Suspendisse quis luctus nulla. Nam feugiat purus nec nisl consequat maximus. Aliquam libero metus, consectetur eu posuere at, elementum non urna.

            Nunc et sapien dapibus, fringilla magna ac, malesuada lacus. Pellentesque vitae rutrum velit, varius vestibulum orci. Quisque lacus mi, maximus quis consequat eu, pretium pulvinar libero. Fusce malesuada molestie erat, non pretium odio consequat eget. Ut feugiat mi nulla, sit amet molestie arcu mattis vel. Phasellus orci enim, venenatis ac lectus et, euismod fringilla nisl. Vestibulum eu libero dui.

            Quisque vitae mauris a lorem hendrerit imperdiet ut vestibulum dui. In lobortis imperdiet metus, vel consequat nibh fringilla in. Morbi vulputate condimentum laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum finibus felis quis auctor vulputate. Praesent quis nibh eu velit semper molestie quis a magna. Fusce eget odio et sapien condimentum vestibulum. Sed venenatis nulla id viverra tincidunt. Sed pharetra sagittis tortor vel condimentum. Nam odio ipsum, sagittis tincidunt quam quis, consectetur maximus ante. Sed tempus nunc ex, eget pharetra lorem interdum eu. Nam sit amet libero vel est ornare lobortis et nec nulla. Quisque orci ipsum, cursus non erat ac, sagittis aliquam neque. Proin elementum diam quis elementum blandit.

            Aliquam dignissim est arcu, eu laoreet ligula consequat nec. Donec dapibus placerat ipsum, non varius neque sollicitudin in. Nunc eget ex dolor. Morbi eu imperdiet est, at luctus turpis. Nulla facilisi. Aliquam erat volutpat. In sed odio pulvinar, finibus orci vel, interdum purus. Proin fringilla, odio a molestie pretium, nisi neque facilisis est, in accumsan nibh justo et diam. Aenean non leo at enim porta maximus. Praesent eu ullamcorper metus. In hendrerit blandit feugiat. Proin commodo ligula vitae orci rhoncus pharetra. Duis in sodales est.

            Nullam mattis leo justo, id vehicula odio tempus et. Praesent tincidunt commodo dui ac viverra. Donec nibh ligula, viverra eu auctor a, imperdiet at elit. Duis pulvinar tortor sit amet lectus elementum, in aliquet dui gravida. In porta placerat felis, vel consequat libero gravida eget. Fusce a quam ac turpis iaculis vulputate nec eu metus. Aenean scelerisque justo a magna cursus, at efficitur tellus rhoncus. Nam id ultrices nibh. Praesent eleifend nunc nec mauris semper pulvinar. Pellentesque luctus convallis lectus, vel interdum lacus aliquam nec. Duis molestie non odio non ullamcorper. Aliquam augue metus, vulputate vitae maximus et, facilisis sit amet nunc. Fusce non rutrum tortor. Vivamus blandit tempor nulla quis rutrum. Aliquam pretium aliquet justo, ut pellentesque magna molestie vitae. Quisque ac ex ac magna volutpat egestas.

            Aliquam eros urna, condimentum quis placerat mollis, tincidunt a eros. Phasellus suscipit suscipit sem, at pretium quam semper a. Ut rutrum tincidunt tristique. Integer pulvinar dictum neque, id lacinia metus lobortis eu. Pellentesque porta nisi eros, non laoreet neque luctus eget. Mauris sed malesuada enim. Donec turpis justo, fringilla id dui eu, mattis congue velit. Ut pulvinar, quam id varius porta, tortor lacus condimentum massa, sit amet consectetur lorem sem a magna. Suspendisse potenti.

            Morbi ut ultrices lorem, et varius ligula. In hac habitasse platea dictumst. Aenean et augue fermentum, interdum ligula ut, mattis nisl. Nulla a eros nec mi luctus rhoncus. Fusce nec mattis enim. Morbi turpis leo, laoreet sollicitudin mollis vel, tempor quis erat. Proin venenatis finibus odio, vitae pulvinar tortor posuere posuere. Curabitur venenatis ante sapien, vel cursus dui viverra non. Morbi sit amet tortor nibh.

            Vestibulum elementum ipsum arcu, eu pretium dui tristique sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eleifend sapien sit amet risus dapibus cursus. Nullam at magna turpis. Morbi vel dapibus orci, sed hendrerit nisi. Curabitur rutrum ligula eu sodales fringilla. Pellentesque dictum dui consequat tempor auctor. Pellentesque consequat ultricies placerat. In in ex leo. Maecenas blandit faucibus nulla ultricies sollicitudin. Donec ac enim ac nisl rutrum ultrices. Donec lacinia nec sem vel aliquam.

            Nam in erat sit amet ipsum euismod volutpat in ut lectus. Curabitur eu lectus aliquet, consectetur purus id, feugiat arcu. Morbi ullamcorper est nec ultrices dictum. Maecenas libero dui, fermentum vitae turpis id, accumsan facilisis enim. Etiam tincidunt, felis vitae consectetur egestas, orci nisl dictum mi, ut ornare dolor ipsum pretium sem. Curabitur sit amet vulputate elit. Donec sit amet tristique libero. Fusce mattis dolor quis est faucibus sollicitudin. Pellentesque ultrices vitae velit vel malesuada. Curabitur aliquam elit a nunc finibus varius.

            Praesent mollis arcu nec sapien suscipit, eu elementum ipsum sagittis. Donec suscipit egestas finibus. Integer ac est eu justo ultrices eleifend facilisis at risus. Vivamus ut sem eget turpis tincidunt posuere vel vel nulla. Quisque non consequat felis. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget est varius nisl lobortis molestie. Sed venenatis massa in quam venenatis, sit amet porttitor lectus interdum. Duis convallis sem ac est consectetur ullamcorper. Mauris sit amet odio nec dui cursus dignissim. Sed lobortis eros non pretium pretium. Nullam in aliquam mi, nec tincidunt mauris.

            Pellentesque scelerisque lorem nec scelerisque volutpat. Mauris nec erat turpis. Donec placerat diam neque. Pellentesque porta porttitor accumsan. Cras mattis lectus sit amet justo facilisis, nec gravida elit auctor. In at tincidunt dolor, vel blandit ex. Nulla nec lectus elit. Ut quis tincidunt lorem. Suspendisse quis velit metus. Morbi aliquet lectus a dui pretium, ac faucibus lorem interdum. Donec consectetur cursus nisl ut tincidunt. Nullam varius neque ut dolor ultricies, a suscipit libero venenatis. Suspendisse aliquam ligula et purus gravida accumsan. Nulla convallis lectus ac nunc sodales, id volutpat erat vulputate. Nunc fermentum velit tellus, vitae hendrerit dui viverra quis. Donec volutpat mauris a erat auctor, sit amet pretium neque scelerisque.

            Integer in lacinia urna, sed congue lorem. Aliquam ut justo maximus, tincidunt sem non, malesuada purus. Vestibulum varius rutrum ligula quis rutrum. Nulla ut ultrices sapien, vitae laoreet eros. Duis posuere accumsan pulvinar. Donec vitae consequat dolor. Curabitur sit amet felis tristique, consectetur diam vitae, dapibus nibh. Aliquam vestibulum, ante id posuere dictum, orci magna maximus leo, eget consequat magna urna id velit. Proin pellentesque enim vel metus vulputate, non tristique ligula efficitur. In suscipit nunc non arcu eleifend posuere. Mauris euismod ante sit amet auctor vehicula. Suspendisse ac commodo enim, sit amet varius dolor.
        </div>
    );
};

const isLoading = () => boolean('isLoading', false);
const isCentered = () => boolean('isCentered', false);
const hasPadding = () => boolean('hasPadding', false);

storiesOf('Layouts/LayoutModule', module)
    .addParameters({
        component: LayoutModule,
        componentSubtitle: 'How to use our layout for modules',
        notes: {markdown: markdownNotes}
    })
    .addDecorator(withKnobs)
    .add('Default', () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}
        >
            <LayoutModule
                navigation={<FakeNavigation/>}
                header={<FakeHeader/>}
                content={<FakeContent/>}
            />
        </div>
    ))
    .add('Loading', () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}
        >
            <LayoutModule
                isLoading
                navigation={<FakeNavigation/>}
                header={<FakeHeader/>}
                content={<FakeContent/>}
            />
        </div>
    ))
    .add('Playground', () => (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex'
        }}
        >
            <LayoutModule
                isCentered={isCentered()}
                hasPadding={hasPadding()}
                isLoading={isLoading()}
                component={text('HTML element', 'main')}
                navigation={<FakeNavigation/>}
                header={<FakeHeader/>}
                content={<FakeContent/>}
            />
        </div>
    ));
