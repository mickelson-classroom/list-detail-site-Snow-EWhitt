import { FC } from "react";
import { Item } from './Item';
import { Planet } from '../models/planets';

export const List: FC<{
    items: Planet[];
    onSelect: (i: Planet) => void;
}> = ({ items, onSelect }) => {
    return <>{items.map((i) => (<Item key={i.id} item={i} onClick={onSelect} />))}</>
}