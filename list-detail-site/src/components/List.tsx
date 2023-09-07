import { FC } from "react";
import { Item } from './Item';
import { Planet } from '../models/planets';

export const List: FC<{
    items: Planet[];
    onSelect: (i: Planet) => void;
}> = ({ items, onSelect }) => {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-8">
            {items.map((i) => (<Item key={i.id} item={i} onClick={onSelect} />))}
        </div>
    );
}