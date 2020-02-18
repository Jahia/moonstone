import {File, SiteWeb, Folder} from '~/tokens/icons/asset';

const ICON_BY_NODE_TYPE = {
    'jnt:page': File,
    'jnt:virtualsite': SiteWeb,
    'jnt:folder': Folder,
    'jnt:contentFolder': Folder,
    'jnt:content': File
};

function getIcon(nodeType) {
    return ICON_BY_NODE_TYPE[nodeType];
}

export {getIcon};
