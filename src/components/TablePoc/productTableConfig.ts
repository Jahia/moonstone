
import {TableColumnConfig} from './TableColumnConfigTypes';
import {ProductDataTypes} from './UserData.types';

export const productTableConfig: TableColumnConfig<ProductDataTypes>[] = [
    {
        key: 'id',
        header: 'ID'
    },
    {
        key: 'productName',
        header: 'Produit'
    },
    {
        key: 'category',
        header: 'Catégorie'
    }
];
